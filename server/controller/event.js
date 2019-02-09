const Event = require('./../models/Event')

exports.findDetails = async (req, res) => {
    const ourQuery = Object.keys(req.query)[0];
    const value = req.query[ourQuery];
    let obj = {};
    obj[ourQuery] = value;
    
    const events = await Event.find({
        ...obj
    });

    let str = '';
    
    events.forEach(
        event => str += `${event.name} is on ${event.time} at ${event.location}\n`
    )
    
    return res.send(str);
}
