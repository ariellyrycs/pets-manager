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


gulp.task('build', ['remove', 'concat', 'ugly', 'stylus', 'jade', 'lint']);
gulp.task('dev', ['remove', 'concat', 'ugly', 'stylus', 'jade', 'lint', 'watch', 'connectDev']);
gulp.task('default', ['dev']);
/* example https://github.com/TonyMtz/pets-tracker/blob/master/gulpfile.js#L91*/