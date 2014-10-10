/**
 * Created by arobles on 10/8/14.
 */
var gulp = require('gulp');
gulp.task('watch', function() {
    gulp.watch('./build/**/*.js', function() {
        gulp.run('lint');
    });
    gulp.watch('./build/scripts/**/*.js', function() {
        gulp.run('concat');
    });
    gulp.watch('./build/**/*.jade', function() {
        gulp.run('jade');
    });
});

