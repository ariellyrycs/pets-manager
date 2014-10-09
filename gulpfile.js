'use strict';

var gulp = require('gulp'),
    jsHint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    stylus = require('gulp-stylus'),


    jsHintTask = require('./tools/js-hint.js'),
    watchTask = require('./tools/watch-js.js'),
    jadeTask = require('./tools/jade.js'),
    concatTask = require('./tools/concat-js.js'),
    stylusTask = require('./tools/stylus-js.js');



jsHintTask(gulp, jsHint, stylish);
watchTask(gulp);
jadeTask(gulp, jade);
concatTask(gulp, concat, rename, uglify),
stylusTask(gulp, stylus);

gulp.task('default', ['lint', 'watch']);
gulp.task('html', ['jade']);
gulp.task('shrink', ['concat']);
gulp.task('css', ['stylus']);