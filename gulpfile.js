'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var typescript = require('gulp-typescript');
var watch = require('gulp-watch');

var del = require('del');
var merge = require('event-stream').merge;
var runSequence = require('run-sequence');
var electron = require('electron-connect').server.create();

var tsProject = typescript.createProject('./src/tsconfig.json');
var tsTestProject = typescript.createProject('./test/tsconfig.json');
var srcDir = 'src';
var testDir = 'test';
var appDir = 'app';
var distDir = 'dist';

var tsFiles = './src/**/*.{ts,tsx}';
var ssFiles = './src/**/*.{sass,scss}';
var rsFiles = './src/**/*.{png,otf,html,css}';
var tsTestFiles = './test/**/*.ts';

// Clean project
gulp.task('clean', function() {
  del(['app', 'dist', 'coverage']);
});

// Copy to app
gulp.task('copy', function() {
  gulp.src(rsFiles, {base: 'src'})
    .pipe(gulp.dest('./app'));
});

// TypeScript -> ES6 -> ES5
gulp.task('ts:compile', function() {
  var tsResult = gulp.src(tsFiles)
                   .pipe(plumber())
                   .pipe(typescript(tsProject));

  return merge([
    tsResult.pipe(babel())
      .pipe(rename(function(path) { path.dirname = path.dirname.replace('typescripts', 'javascripts')}))
      .pipe(gulp.dest('./app/')),
      
    tsResult.dts
      .pipe(gulp.dest('./src/'))
  ]);
});

gulp.task('ts:testCompile', ['clean', 'ts:compile'], function() {
  gulp.src(tsTestFiles)
    .pipe(plumber())
    .pipe(typescript(tsTestProject))
    .pipe(babel())
    .pipe(gulp.dest('./test/'));
});

// SASS -> CSS
gulp.task('sass:compile', function() {
  gulp.src(ssFiles)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./app'));
});

// Auto compile
gulp.task('watch', function() {
  // *.ts, *.tsx(TypeScript React) -> compile
  watch(tsFiles, function() {
    gulp.run('ts:compile'); 
  });
  
  // *.sass, *.scss -> compile
  watch(ssFiles, function() {
    gulp.run('sass:compile');
  });
  
  // *.html, *.css -> copy
  watch(rsFiles, function() {
    gulp.start(['copy']);
  });
});

// Build
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    'ts:compile',
    'sass:compile',
    'copy',
    callback
  );
});

gulp.task('serve', function () {
  // http://qiita.com/Quramy/items/90d61ff37ca1b95a7f6d#livereload
  electron.start();

  // BrowserProcess(MainProcess)が読み込むリソースが変更されたら, Electron自体を再起動
  watch(['./app/main.js', './app/browser/*.js'], function() {
    // 再起動せずに増える
    // electron.restart();
  });

  // RendererProcessが読み込むリソースが変更されたら, RendererProcessにreloadさせる
  watch(['./app/renderer/**/*.css', './app/renderer/**/*.js', './app/**/*.html', './app/**/*.png', './app/**/*.otf'], electron.reload);
});

gulp.task('default', function(callback) {
  return runSequence(
    'clean',
    'ts:compile',
    'sass:compile',
    'copy',
    'watch',
    'serve',
    callback
  );
});