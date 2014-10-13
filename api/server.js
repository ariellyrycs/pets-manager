'use strict';

var express = require('express'),
    //mongoose = require('mongoose'),
    responder = require('./httpResponder'),
    bodyParser  = require('body-parser'),
    fs = require('fs'),
    Datastore = require('nedb'),

    app = express(),
    db = {},
    routeFile;


app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next){
    res.type('application/json');
    res.locals.respond = responder.setup(res);
    next();
});


var jsFiles = new RegExp(".(js)$", "i");
fs.readdirSync(__dirname + '/routes').forEach(function (fileName) {
    if(jsFiles.test(fileName)) {
        routeFile = require(__dirname + '/routes/' + fileName);
        routeFile(app, Datastore, db);
    }
});

app.listen(app.get('port'), function () {
    console.log('listening on port 3000');
});




