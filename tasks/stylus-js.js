/**
 * Created by arobles on 10/8/14.
 */
var gulp = require('gulp'),
    stylus = require('gulp-stylus');
gulp.task('stylus', function() {
    gulp.src('./build/style/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./webapp/css/'));
});
