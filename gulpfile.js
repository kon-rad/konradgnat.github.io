'use strict';

var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    cssnano         = require('gulp-cssnano'),
    sourcemaps      = require('gulp-sourcemaps'),
    autoprefixer    = require('gulp-autoprefixer'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant'),
    mozjpeg         = require('imagemin-mozjpeg'),
    webp            = require('gulp-webp'),
    uncss           = require('gulp-uncss'),
    concat          = require('gulp-concat'),
    gutil           = require('gulp-util'),
    critical        = require('critical').stream;

gulp.task('workflow', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    // .pipe(concat('main.css'))
    // .pipe(uncss({
    //   html: 'index.html'
    // }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('imagemin', function() {
  gulp.src(['./src/images/*'])
    .pipe(imagemin([
      pngquant({
        speed: 1,
        quality: 98
      }),
      mozjpeg({
        quality: 90
      })
    ]))
    .pipe(gulp.dest('dist/images/'))
});
 
// gulp.task('critical', function() {
//     return gulp.src('index.html')
//         .pipe(critical({base: 'dist/',
//                         inline: true,
//                         css: [
//                         './dist/css/main.css'
//                         ]}))
//         .on('error', function(err) {gutil.log(gutil.colors.red(err.message)); })
//         .pipe(gulp.dest('./'));
// });

gulp.task('webp', function() {
  gulp.src(['./src/images/*'])
    .pipe(webp())
    .pipe(gulp.dest('dist/images/webp/'))
});


gulp.task('default', function () {
  gulp.watch('./src/sass/**/*.scss', ['workflow']);
});
