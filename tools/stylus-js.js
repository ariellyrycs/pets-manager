/**
 * Created by arobles on 10/8/14.
 */
module.exports = function (gulp, stylus) {
    gulp.task('stylus', function() {
        gulp.src('./build/style/*.styl')
            .pipe(stylus())
            .pipe(gulp.dest('./webapp/css/'));
    });
};