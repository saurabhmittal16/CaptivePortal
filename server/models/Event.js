const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: String,
    location : {
        type : mongoose.Schema.Types.ObjectId
    },
    details: String,
    time: String,
    category: String
}, {
    versionKey: false
});


EventSchema.statics.findPlaceByName = async function(eventName) {
    const Event = this;   
    const event = await Event.findOne({
       name : eventName
    })
    return event.location; 
}

module.exports = mongoose.model('event', EventSchema);