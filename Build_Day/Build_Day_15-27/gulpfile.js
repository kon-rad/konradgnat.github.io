'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('workflow', function() {
  gulp.src('./src/sass/**/*.scss')
  // Tasks go here all get piped to dest folder
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(cssnano())
  .pipe(sourcemaps.write('./'))
  // dest folder
  .pipe(gulp.dest('./dist/css/'))
});

gulp.task('default', function() {
  gulp.watch('./src/sass/**/*.scss', ['workflow']);
});

//
// 'use strict';
//
// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var cssnano = require('gulp-cssnano');
// var sourcemaps = require('gulp-sourcemaps');
// var autoprefixer = require('gulp-autoprefixer');
//
// gulp.task('workflow', function () {
// 	gulp.src('./src/sass/**/*.scss')
// 		.pipe(sourcemaps.init())
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions'],
// 			cascade: false
// 		}))
// 		.pipe(cssnano())
// 		.pipe(sourcemaps.write('./'))
//
// 	.pipe(gulp.dest('./dist/css/'))
// });
//
// gulp.task('default', function () {
// 	gulp.watch('./src/sass/**/*.scss', ['workflow']);
// });
