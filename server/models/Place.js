const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
    name: String,
    location: String,
    events: Array,
    category: String
}, {
    versionKey: false
});

module.exports = mongoose.model('place', EventSchema);