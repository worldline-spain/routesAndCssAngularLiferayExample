'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat')
 
gulp.task('sass', function () {
  return gulp.src('src/main/resources/META-INF/resources/js/ap/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('src/main/resources/META-INF/resources/css'));
});