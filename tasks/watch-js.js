/**
 * Created by arobles on 10/8/14.
 */
var gulp = require('gulp'),
    path = require('./paths.json'),
    watch = require('gulp-watch'),
    asyncTaskControl = [{
        "src": path.src.concat,
        "events": ['ugly:onlyWatch', 'lint:onlyWatch','reloadConnection']
    },
    {
        "src": path.src.jade,
        "events": ['jade:onlyWatch', 'reloadConnection']
    },
    {
        "src": path.src.stylus,
        "events": ['stylus:onlyWatch', 'connectDev']
    }];
gulp.task('watch', ['lint'], function () {
    var i,
        length = asyncTaskControl.length;
    for(i = 0; i < length; i++) {
        gulp.watch(asyncTaskControl[i].src, asyncTaskControl[i].events, function () {
            console.log("It's done");
        });
    }
});


