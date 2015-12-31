'use strict';

var gulp = require('gulp');
var typescript = require('gulp-typescript');
var babel = require('gulp-babel');
var rename = require('gulp-rename');

var merge = require('event-stream').merge;
var runSequence = require('run-sequence');
var electron = require('electron-connect').server.create();

var tsProject = typescript.createProject('./src/tsconfig.json');
var srcDir = 'src';
var appDir = 'app';
var distDir = 'dist';

// Copy to app
gulp.task('copy', function() {
  gulp.src(['./src/**/*.{html,css}'], {base: 'src'})
    .pipe(gulp.dest('./app'));
});

// TypeScript -> ES6 -> ES5
gulp.task('ts:compile', function() {
  var tsResult = gulp.src(['./src/ts/**/*.tsx', './src/ts/**/*.ts'])
                   .pipe(typescript(tsProject));
  return merge([
    tsResult.pipe(babel())
      .pipe(rename(function(path) { path.dirname = path.dirname.replace('ts', '')}))
      .pipe(gulp.dest('./app/js')),
      
    tsResult.dts
      .pipe(gulp.dest('./src/ts'))
  ]);
});

// Auto compile
gulp.task('watch', function() {
  // *.ts, *.tsx(TypeScript React) -> compile
  gulp.watch('./src/ts/**/*.{ts,tsx}', function(){
    gulp.run('ts:compile'); 
  });
  // *.html, *.css -> copy
  gulp.watch('./src/**/*.{html,css}', function() {
    gulp.start(['copy']);
  });
});

// Build
gulp.task('build', function() {
  gulp.start('ts:compile');
  gulp.start('copy');
});

gulp.task('serve', function () {
  // http://qiita.com/Quramy/items/90d61ff37ca1b95a7f6d#livereload
  electron.start();

  // BrowserProcess(MainProcess)が読み込むリソースが変更されたら, Electron自体を再起動
  gulp.watch(['./app/**/main.js'], electron.restart);

  // RendererProcessが読み込むリソースが変更されたら, RendererProcessにreloadさせる
  gulp.watch(['./app/**/*.css', './app/**/*.js', './app/**/*.html'], electron.reload);
});

gulp.task('default', function(callback) {
  return runSequence(
    'ts:compile',
    'copy',
    'watch',
    'serve',
    callback
  );
});