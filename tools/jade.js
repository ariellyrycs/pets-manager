/**
 * Created by arobles on 10/8/14.
 */

module.exports = function (gulp, jade) {
    gulp.task('jade', function() {
        var YOUR_LOCALS = {};
        gulp.src('./build/views/**/*.jade')
            .pipe(jade({
                locals: YOUR_LOCALS
            }))
            .pipe(gulp.dest('./webapp/views/'));
    });
};
