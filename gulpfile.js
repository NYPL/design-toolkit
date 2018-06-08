'use strict';
const gulp = require('gulp');

const shell = require('gulp-shell');

const sass = require('gulp-sass');

const sourcemaps = require('gulp-sourcemaps');

const autoprefixer = require('gulp-autoprefixer');

const concat = require('gulp-concat');

const uglify = require('gulp-uglify');

// variables used in our sass tasks
const input = 'sass/**/*.scss';
const output = 'docs/css';

//
// update, autoprefix and other stuff to the  sass:
// options ot pass:
const sassOptions = {
  errLogToConsole: true,
  //outputStyle: 'compressed'
};

// autoprefixer options
// this covers 90.87% of all browsers. run npx autoprefixer --info to see full report.
const autoprefixerOptions = {
  browsers: ['last 10 versions', '> 5%', 'Firefox ESR'],
  flexbox: 'true',
  grid: 'true'
};

//
// main gulp task
//
gulp.task('sass', function () {
  return gulp.src(input)
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(output));
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
