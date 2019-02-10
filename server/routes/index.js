const controller = require('./../controller')

const routes = [
    {
        method: 'GET',
        url: '/api/event',
        handler: controller.findEventDeatils
    }
];

module.exports = [].concat(routes)
