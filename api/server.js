'use strict';


var express = require('express'),
    app = express(),
    //mongoose = require('mongoose'),
    Datastore = require('nedb'),
    responder = require('./httpResponder'),
    bodyParser  = require('body-parser'),
    db = {};


db.owners = new Datastore({ filename: 'api/db/owners', autoload: true});

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function (req, res, next){
    res.type('application/json');
    res.locals.respond = responder.setup(res);
    next();
});

app.get('/', function (req, res) {
    res.send("The API is working.");
});

app.get('/owners', function (req, res) {
    db.owners.find({}, res.locals.respond);
});

app.post('/owners', function (req, res) {
    db.owners.insert({ name: req.body.name}, res.locals.respond);
});


app.get('/owners/:id', function (req, res) {
    db.owners.findOne({ _id: req.params.id}, res.locals.respond);
});

app.put('/owners/:id' , function (req, res) {
    db.owners.update({ _id: req.params.id}, req.body, function (err, num) {
        res.locals.respond(err, { success: num + " updated" });
    })
});

app.delete('/owners/:id', function (req, res) {
    db.owners.remove({ _id: req.params.id}, function (err, num) {
        res.locals.respond(err, { success: num + " deleted"});
    });
});

//poets

db.pets = new Datastore({ filename: 'api/db/pets', autoload: true});

app.get('/owners/pets', function (req, res) {
    db.pets.find({}, res.locals.respond);
});

app.post('/owners/pets', function (req, res) {
    db.pets.insert({ name: req.body.name, owner_id: req.body.owner }, res.locals.respond);
});


app.get('/owners/:ownerId/pets/:petId', function (req, res) {
    db.pets.findOne({ pet_id: req.params.petId, owner_id: req.params.ownerId}, res.locals.respond);
});

app.put('/owners/:ownerId/pets/:petId' , function (req, res) {
    db.pets.update({ pet_id: req.params.petId, owner_id: req.params.ownerId }, req.body, function (err, num) {
        res.locals.respond(err, { success: num + " updated" });
    })
});

app.delete('/owners/:ownerId/pets/:petId', function (req, res) {
    db.pets.remove({ pet_id: req.params.petId, owner_id: req.params.ownerId }, function (err, num) {
        res.locals.respond(err, { success: num + " deleted"});
    });
});


app.listen(app.get('port'), function () {
    console.log('listening on port 3000');
});