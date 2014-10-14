'use strict';

var express = require('express'),
    mongoose = require('mongoose'),
    responder = require('./httpResponder'),
    bodyParser  = require('body-parser'),
    app = express();


app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next){
    res.type('application/json');
    res.locals.respond = responder.setup(res);
    next();
});


require('./routes/pets.js')(app);
// MongoDB configuration
mongoose.connect('mongodb://localhost/pets', function(err) {
    if(err) {
        console.log('error connecting to MongoDB Database. ' + err);
    } else {
        console.log('Connected to Database');
    }
});
app.listen(app.get('port'), function () {
    console.log('listening on port 3000');
});




