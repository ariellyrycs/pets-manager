'use strict';

var gulp = require('gulp'),
    fs = require('fs');

//load all files in task dir
var jsFiles = new RegExp(".(js)$", "i");
fs.readdirSync(__dirname + '/tasks').forEach(function (fileName) {
    if(jsFiles.test(fileName)) {
        require(__dirname + '/tasks/' + fileName);
    }
});

gulp.task('default', ['lint', 'watch']);
gulp.task('html', ['jade']);
gulp.task('shrink', ['concat']);
gulp.task('css', ['stylus']);