var router = require('express').Router();
var dayRouter = require('./days');
var attractionRouter = require('./attraction');
var models = require('../models');

router.use('/days', dayRouter);

router.get('/', function (req, res, next) {
    models.Hotel.find({}).exec(function (err, hotels) {
        models.Restaurant.find({}).exec(function (err, restaurants) {
            models.ThingToDo.find({}).exec(function (err, thingsToDo) {
                res.render('index', {
                    all_hotels: hotels,
                    all_restaurants: restaurants,
                    all_things_to_do: thingsToDo
                });
            });
        });
    });
});

module.exports = router;
