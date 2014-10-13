
var gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    path = require('./paths.json');

gulp.task('remove', function() {
    return gulp.src(path.src.rimraf , { read: false })
        .pipe(rimraf({ force: true }));
});