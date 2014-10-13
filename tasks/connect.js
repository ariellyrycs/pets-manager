'use strict';
var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connectDev', function() {
    connect.server({
        root: './webapp/views',
        port: 8001,
        livereload: true
    });
});
gulp.task('reloadConnection', function () {
    connect.reload();
});