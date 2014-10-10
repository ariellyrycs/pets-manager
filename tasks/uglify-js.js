/**
 * Created by arobles on 10/10/14.
 */

var gulp = require('gulp'),
    uglify = require('gulp-uglifyjs');
gulp.task('ugly', function() {
    gulp.src('./webapp/scripts/main.js')
        .pipe(uglify('main.min.js'))
        .pipe(gulp.dest('./webapp/scripts/'));

});
