/**
 * Created by arobles on 10/8/14.
 */

var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('jade', function() {
    gulp.src('./build/views/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./webapp/views/'));
});
