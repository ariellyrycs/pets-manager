/**
 * Created by arobles on 10/8/14.
 */
module.exports = function (gulp, concat, rename, uglify) {
    gulp.task('concat', function() {
        gulp.src(['./build/scripts/**/*.js'])
            .pipe(concat('main.js'))
            .pipe(gulp.dest('./webapp/scripts/'))
            .pipe(uglify())
            .pipe(rename('main.min.js'))
            .pipe(gulp.dest('./webapp/scripts/'));
    });
};