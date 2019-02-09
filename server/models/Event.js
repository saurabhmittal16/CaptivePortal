const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: String,
    // location : {
    //     type : mongoose.Schema.Types.ObjectId
    // },
    location: String,
    details: String,
    time: String,
    category: String
}, {
    versionKey: false
});


EventSchema.statics.findDetailsByName = async function(eventName) {
    const Event = this;   
    const event = await Event.findOne({
       name : eventName
    })
    return event.details; 
}

module.exports = mongoose.model('event', EventSchema);