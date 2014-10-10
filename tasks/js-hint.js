/**
 * Created by arobles on 10/8/14.
 */
var gulp = require('gulp'),
    stylish = require('jshint-stylish'),
    jsHint = require('gulp-jshint');
gulp.task('lint', function() {
    return gulp.src('./build/*.js')
        .pipe(jsHint('./tasks/.jshintrc'))
        .pipe(jsHint.reporter(stylish));
});
