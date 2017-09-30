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
    critical        = require('critical').stream,
    babel           = require('gulp-babel');
 
gulp.task('babel', () =>
    gulp.src('src/scripts/main.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist/js/'))
);

gulp.task('workflow', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
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
      }, {verbose: true})
    ]))
    .pipe(gulp.dest('dist/images/'))
});


// gulp.task('imagemin', function() {
//     return gulp.src([paths.srcPath + '/images/**/*.*'])
//         .pipe(imagemin([
//             pngquant({
//                 speed: 1,
//                 quality: '50'
//             }),
//             imageminMozjpeg({
//                 quality: 90
//             })
//         ], {verbose: true}))
//         .pipe(gulp.dest(paths.publicPath + '/assets/images'));
// });

// gulp.task('webp', function() {
//     return gulp.src([paths.srcPath + '/images/**/*.*'])
//         .pipe(webp())
//         .pipe(gulp.dest(paths.publicPath + '/assets/images/webp'));
// });

gulp.task('webp', function() {
  gulp.src(['./src/images/*'])
    .pipe(webp())
    .pipe(gulp.dest('dist/images/webp/'))
});


gulp.task('default', function () {
  gulp.watch('src/sass/**/*.scss', ['workflow']);
  gulp.watch('./src/scripts/**/*.js', ['babel']);
});
