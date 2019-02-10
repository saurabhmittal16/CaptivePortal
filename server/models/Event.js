const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: String,
    location: String,
    locUrl: String,
    details: String,
    time: String,
    category: String
}, {
    versionKey: false
});

module.exports = mongoose.model('event', EventSchema);