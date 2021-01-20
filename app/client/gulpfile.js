'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    mozjpeg = require('imagemin-mozjpeg'),
    webp = require('gulp-webp'),
    babel = require('gulp-babel');
const { src, dest, series } = require('gulp');

gulp.task('babel', (done) => {
    gulp.src('src/index.js')
        .pipe(
            babel({
                presets: ['env']
            })
        )
        .pipe(gulp.dest('../konradgnat/static_files/js/'));
    done();
});

gulp.task('css', function (done) {
    gulp.src('./src/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                cascade: false
            })
        )
        .pipe(cssnano())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('../konradgnat/static_files/css/'));
    gulp.src('./src/styles/vendors/*').pipe(
        gulp.dest('../konradgnat/static_files/css/')
    );
    done();
});

gulp.task('imagemin', function (done) {
    gulp.src(['./src/images/**/*'])
        // .pipe(
        //     imagemin([
        //         pngquant({
        //             speed: 1,
        //             quality: [0.7, 0.8]
        //         }),
        //         mozjpeg(
        //             {
        //                 quality: 90
        //             },
        //             {
        //                 verbose: true
        //             }
        //         )
        //     ])
        // )
        .pipe(gulp.dest('../konradgnat/static_files/images/'));

    // gulp.src(['./src/images/*'])
    //     .pipe(webp())
    //     .pipe(gulp.dest('../konradgnat/static_files/images/webp/'));
    done();
});

gulp.task(
    'default',
    series('css', 'babel', function (done) {
        gulp.watch('src/styles/**/*.scss', series('css'));
        gulp.watch('./src/scripts/**/*.js', series('babel'));
        done();
    })
);

gulp.task(
    'build',
    series('css', 'imagemin', function (done) {
        done();
    })
);
