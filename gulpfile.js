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
gulp.task('gulpFiles', ['lint:gulpFiles', 'watch:gulpFiles']);
gulp.task('api', ['lint:APIFiles', 'watch:APIFiles']);
gulp.task('build', ['remove', 'concat', 'ugly', 'stylus', 'jade', 'lint']);
gulp.task('dev', ['api', 'gulpFiles', 'remove', 'concat', 'ugly', 'stylus', 'jade', 'lint', 'watch', 'connectDev']);

gulp.task('default', ['dev']);
