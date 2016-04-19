/// <reference path="src/typings/tsd.d.ts" />

import * as gulp from "gulp";
import * as babel from "gulp-babel";
import * as plumber from "gulp-plumber";
import * as sass from "gulp-sass";
import * as typescript from "gulp-typescript";
import * as useref from "gulp-useref";
import * as watch from "gulp-watch";

import * as browserify from "browserify";
import * as buffer from "vinyl-buffer";
import * as childProcess from "child_process";
import * as runSequence from "run-sequence";
import * as source from "vinyl-source-stream";

/* tslint:disable - typings is not defined. */
const del = require("del");
const stringify = require("stringify");
const electron = require("electron-connect").server.create();
const packager = require("electron-packager");
const config = require("./package.json");
const tsfiles = require("./tsfiles.json");
/* tslint:enable */

const gitHash: string = childProcess.execSync("git rev-parse HEAD").toString().trim();

const tsMainProject: any = typescript.createProject("./src/tsconfig.json");
const tsTestProject: any = typescript.createProject("./test/tsconfig.json");

const appDir: string = "./app";
const srcDir: string = "./src";
const testDir: string = "./test";

const tsFiles: string = srcDir + "/**/*.{ts,tsx}";    // TypeScript(*.ts) + TypeScript React(*.tsx)
const ssFiles: string = srcDir + "/**/*.{sass,scss}"; // SASS(*.sass, *.scss)
const htFiles: string = srcDir + "/**/*.html";        // HTML Files
const rsFiles: string = srcDir + "/**/*.json";        // Resource Files
const ttFiles: string = testDir + "/**/*.ts";         // TypeScript Test

let served: boolean = false;

// Clean project
gulp.task("clean", (done) => {
  del(["app", "dist", "coverage", "test/**/*.js"]);
  done();
});

// TypeScript Compile (Main)
gulp.task("ts:compile:main", () => {
  return gulp.src(tsFiles)
    .pipe(plumber())
    .pipe(typescript(tsMainProject))
    .pipe(babel())
    .pipe(gulp.dest(appDir));
});

// TypeScript Compile (Test)
gulp.task("ts:compile:test", () => {
  return gulp.src(ttFiles)
    .pipe(plumber())
    .pipe(typescript(tsTestProject))
    .pipe(babel())
    .pipe(gulp.dest(testDir));
});

// SASS Compile
gulp.task("sass:compile", () => {
  return gulp.src(ssFiles)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(appDir));
});

// HTML Compile
gulp.task("html:compile", () => {
  return gulp.src(htFiles, {base: "src"})
    .pipe(useref())
    .pipe(gulp.dest(appDir));
});

gulp.task("browserify:browser", (done) => {
  browserify({
    builtins: [],
    debug: true,
    detectGlobals: false,
    entries: ["app/browser/Application.js"],
    extensions: [".js"],
    ignoreMissing: true
  })
    .transform("envify", {
      GIT_HASH: gitHash,
      NAME: config.name,
      NODE_ENV: "production",
      ROOT: __dirname,
      VERSION: config.version
    })
    .bundle()
    .pipe(source("Application.js"))
    .pipe(buffer())
    .pipe(gulp.dest("app/browser"));
  done();
});

gulp.task("browserify:renderer", (done) => {
  browserify({
    builtins: [],
    debug: true,
    detectGlobals: false,
    entries: tsfiles,
    ignoreMissing: true,
    transform: stringify({
      extensions: [".html"],
      minify: true
    })
  })
    .bundle()
    .pipe(source("Application.js"))
    .pipe(buffer())
    .pipe(gulp.dest("app/renderer"));
  done();
});

// Copy assets
gulp.task("html:copy", () => {
  return gulp.src(htFiles, {base: "src"})
    .pipe(gulp.dest(appDir));
});

gulp.task("assets:copy", () => {
  return gulp.src(rsFiles, {base: "src"})
    .pipe(gulp.dest(appDir));
});

gulp.task("watch", () => {
  watch(tsFiles, () => {
    return runSequence(
      "ts:compile:main",
      "serve:reload"
    );
  });

  watch(ssFiles, () => {
    return runSequence(
      "sass:compile",
      "serve:reload"
    );
  });

  watch(rsFiles, () => {
    gulp.start(["assets:copy"]);
  });
});

gulp.task("serve", () => {
  electron.start();
  served = true;
});

gulp.task("serve:reload", () => {
  if (served) {
    electron.reload();
  }
});

gulp.task("build:main", (done) => {
  return runSequence(
    "clean",
    "ts:compile:main",
    "sass:compile",
    "html:compile",
    "assets:copy",
    "browserify:browser",
    "browserify:renderer",
    done
  );
});

gulp.task("build:test", (done) => {
  return runSequence(
    "clean",
    "ts:compile:main",
    "ts:compile:test",
    done
  );
});

gulp.task("default", (done) => {
  return runSequence(
    "clean",
    "ts:compile:main",
    "sass:compile",
    "html:copy",
    "assets:copy",
    "watch",
    "serve",
    done
  );
});
