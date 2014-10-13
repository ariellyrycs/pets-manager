/**
 * Created by arobles on 10/10/14.
 */
module.exports = function (app, Datastore, db) {
    db.owners = new Datastore({ filename: 'api/db/owners', autoload: true});

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
};