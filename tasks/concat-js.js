/**
 * Created by arobles on 10/8/14.
 */

var gulp = require('gulp'),
    concat = require('gulp-concat');
gulp.task('concat', function() {
    gulp.src(['./build/scripts/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./webapp/scripts/'));
});
