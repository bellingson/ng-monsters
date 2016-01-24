'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('sass', function () {
  gulp.src('./src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/css/*.scss', ['sass']);
});


gulp.task('concat', function() {

  return gulp.src(['src/**/*.js','!src/ng-monster.min.js'])
    .pipe(concat('ng-monster.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/'));
});


gulp.task('default', ['concat'], function() { });

gulp.task('watch', function () {
  gulp.watch('./src/**/*.js', ['concat']);
});