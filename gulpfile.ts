/// <reference path="src/typings/tsd.d.ts" />

import gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const stringify = require('stringify')
const typescript = require('gulp-typescript');
const watch = require('gulp-watch');

const browserify = require('browserify')
const childProcess = require('child_process')
const del = require('del');
const runSequence = require('run-sequence');
const electron = require('electron-connect').server.create();
const packager = require('electron-packager');
const config = require('./package.json');
const tsfiles = require('./tsfiles.json');
const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream')

const gitHash = childProcess.execSync('git rev-parse HEAD').toString().trim();

const tsMainProject = typescript.createProject('./src/tsconfig.json');
const tsTestProject = typescript.createProject('./test/tsconfig.json');

const appDir = './app';
const distDir = './dist';
const srcDir = './src';
const testDir = './test';

const tsFiles = srcDir + '/**/*.{ts,tsx}';    // TypeScript(*.ts) + TypeScript React(*.tsx)
const ssFiles = srcDir + '/**/*.{sass,scss}'; // SASS(*.sass, *.scss)
const rsFiles = srcDir + '/**/*.{html,json}'; // Resource Files
const ttFiles = testDir + '/**/*.ts';         // TypeScript Test

var served = false;

// Clean project
gulp.task('clean', (done) => {
  del(['app', 'dist', 'coverage', 'test/**/*.js']);
  done();
});

// TypeScript Compile (Main)
gulp.task('ts:compile:main', () => {
  return gulp.src(tsFiles)
    .pipe(plumber())
    .pipe(typescript(tsMainProject))
    .pipe(babel())
    .pipe(gulp.dest(appDir));
});

// TypeScript Compile (Test)
gulp.task('ts:compile:test', () => {
  return gulp.src(ttFiles)
    .pipe(plumber())
    .pipe(typescript(tsTestProject))
    .pipe(babel())
    .pipe(gulp.dest(testDir));
});

// SASS Compile
gulp.task('sass:compile', () => {
  return gulp.src(ssFiles)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(appDir));
});

gulp.task('browserify:browser', (done) => {
	browserify({
		entries: ['app/browser/Application.js'],
		extensions: ['.js'],
    ignoreMissing: true,
    detectGlobals: false,
    builtins: [],
    debug: true,
	})
    .transform({
      NODE_ENV: 'production',
      GIT_HASH: gitHash,
      NAME: config.name,
      VERSION: config.version,
      ROOT: __dirname,
    }, 'envify')
    .bundle()
    .pipe(source('Application.js'))
    .pipe(buffer())
    .pipe(gulp.dest('app/browser'));
  done();
});

gulp.task('browserify:renderer', (done) => {
	browserify({
		transform: stringify({
			extensions: ['.html'],
			minify: true,
		}),
		entries: tsfiles,
    ignoreMissing: true,
    detectGlobals: false,
    builtins: [],
	  debug: true,
	})
    .bundle()
    .pipe(source('Application.js'))
    .pipe(buffer())
    .pipe(gulp.dest('app/renderer'));
  done();
});

// Copy assets
gulp.task('assets:copy', () => {
  return gulp.src(rsFiles, {base: 'src'})
    .pipe(gulp.dest(appDir));
});

gulp.task('watch', () => {
  watch(tsFiles, () => {
    return runSequence(
      'ts:compile:main',
      'serve:reload'
    );
  });
  
  watch(ssFiles, () => {
    return runSequence(
      'sass:compile',
      'serve:reload'
    );
  });
  
  watch(rsFiles, () => {
    gulp.start(['assets:copy']);
  });
});

gulp.task('serve', () => {
  electron.start();
  served = true;
});

gulp.task('serve:reload', () => {
  if(served) {
    electron.reload();
  }
});

gulp.task('build:main', (done) => {
  return runSequence(
    'clean',
    'ts:compile:main',
    'sass:compile',
    'assets:copy',
    'browserify:browser',
    'browserify:renderer',
    done
  );
});

gulp.task('build:test', (done) => {
  return runSequence(
    'clean',
    'ts:compile:main',
    'ts:compile:test',
    done
  );
});

gulp.task('default', (done) => {
  return runSequence(
    'clean',
    'ts:compile:main',
    'sass:compile',
    'assets:copy',
    'watch',
    'serve',
    done
  );
});
