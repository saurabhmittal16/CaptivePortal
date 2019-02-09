const Event = require('./models/Event');

const init = async () => {
    const data = await Event.find({});
    console.log(data);
}

init();