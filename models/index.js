var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var daySchema = new mongoose.Schema({
// add day schema here
    number: Number,
    hotel: {type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'},
    restaurants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'}],
    thingsToDo: [{type: mongoose.Schema.Types.ObjectId, ref: 'ThingToDo'}]
});

var placeSchema = new mongoose.Schema({
    address: String,
    city: String,
    state: String,
    phone: String,
    location: [Number]
});

var hotelSchema = new mongoose.Schema({
    name: String,
    place: [placeSchema],
    num_stars: {type: Number, min: 1, max: 5},
    amenities: String
});

var thingToDoSchema = new mongoose.Schema({
    name: String,
    place: [placeSchema],
    age_range: String
});

var restaurantSchema = new mongoose.Schema({
    name: String,
    place: [placeSchema],
    cuisine: String,
    price: {type: Number, min: 1, max: 5}
});

module.exports = {
    Day: mongoose.model('Day', daySchema),
    Place: mongoose.model('Place', placeSchema),
    Hotel: mongoose.model('Hotel', hotelSchema),
    ThingToDo: mongoose.model('ThingToDo', thingToDoSchema),
    Restaurant: mongoose.model('Restaurant', restaurantSchema),
};
