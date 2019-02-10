const Event = require('../models/Event')

exports.findEventDetails = async (req, res) => {
    const ourQuery = Object.keys(req.query)[0];
    const value = req.query[ourQuery];
    let obj = {};
    obj[ourQuery] = value;
    
    const events = await Event.find({
        ...obj
    });
    return res.send(events);
}