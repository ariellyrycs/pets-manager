/**
 * Created by arobles on 10/10/14.
 */

module.exports = function (app, Datastore, db) {
    'use strict';
    //pets
    db.pets = new Datastore({ filename: 'api/db/pets', autoload: true});

    app.get('/owners/pets', function (req, res) {
        db.pets.find({}, res.locals.respond);
    });

    app.post('/owners/pets', function (req, res) {
        console.log(req.body);
        db.pets.insert({ name: req.body.name, owner_id: req.body.owner }, res.locals.respond);
    });

    /*
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

     */
};