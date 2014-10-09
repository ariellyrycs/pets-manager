/**
 * Created by arobles on 10/8/14.
 */
module.exports = function (gulp, jsHint, stylish) {
    gulp.task('lint', function() {
        return gulp.src('./build/*.js')
            .pipe(jsHint('./tools/.jshintrc'))
            .pipe(jsHint.reporter(stylish));
    });
}