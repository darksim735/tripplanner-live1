
var dayRouter = require('express').Router();
var attractionRouter = require('./attraction'); 
var models = require('../models');


// GET /days
dayRouter.get('/days', function (req, res, next) {
    // serves up all days as json
    
    // looking in database for the days information
    // and storing locally in variable
    alert("next look up database");

    /*
    db.Day.find(function(err, days){
    
        if (err) throw err;
*/
        res.render('index', {
                    all_hotels: hotels,
                    all_restaurants: restaurants,
                    all_things_to_do: thingsToDo
//                });


    });


});
// POST /days
dayRouter.post('/', function (req, res, next) {
    // creates a new day and serves it as json
});
// GET /days/:id
dayRouter.get('/:id', function (req, res, next) {
    // serves a particular day as json
});
// DELETE /days/:id
dayRouter.delete('/:id', function (req, res, next) {
    // deletes a particular day
});

dayRouter.use('/:id', attractionRouter);

module.exports = dayRouter; 
