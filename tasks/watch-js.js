/**
 * Created by arobles on 10/8/14.
 */
'use strict';
var gulp = require('gulp'),
    path = require('./paths.json'),
    asyncTaskControl = [{
        "src": path.src.concat,
        "events": ['ugly:onlyWatch', 'lint:onlyWatch', 'reloadConnection:js']
    },
    {
        "src": path.src.jade,
        "events": ['jade:onlyWatch', 'reloadConnection:html']
    },
    {
        "src": path.src.stylus,
        "events": ['stylus:onlyWatch', 'reloadConnection:css']
    }],
    asyncBuildTasks = function () {
        var i,
            length = asyncTaskControl.length,
            run = function () {
                console.log('reloaded');
            },
            watch = function () {
                gulp.run(this.asyncTaskControl, run);
            };
        for(i = 0; i < length; i += 1) {
            gulp.watch(asyncTaskControl[i].src, watch.bind({asyncTaskControl: asyncTaskControl[i].events}));
        }
    },
    asyncGulpTasks = function () {
        var run = function () {
            console.log('Gulp Files');
            },
            watch = function () {
                gulp.run('lint:gulpFiles', run);
            };
        gulp.watch(path.src.jshintGulp, watch);
    },
    asyncAPITasks = function () {
        var run = function () {
                console.log('API Files');
            },
            watch = function () {
                gulp.run('lint:APIFiles', run);
            };
        gulp.watch(path.src.jshintAPI, watch);
    };
gulp.task('watch', ['lint'], asyncBuildTasks);
gulp.task('watch:gulpFiles', ['lint:gulpFiles'], asyncGulpTasks);
gulp.task('watch:APIFiles', ['lint:APIFiles'], asyncAPITasks);


