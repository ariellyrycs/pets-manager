/**
 * Created by arobles on 10/8/14.
 */

var gulp = require('gulp'),
    jsHint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    path = require('./paths.json'),
    lintJsFiles = function() {
    return gulp.src(path.src.jshint)
        .pipe(jsHint('./tasks/.jshintrc'))
        .pipe(jsHint.reporter(stylish));
};
gulp.task('lint', ['ugly', 'stylus', 'jade'], lintJsFiles);
gulp.task('lint:onlyWatch', lintJsFiles);
