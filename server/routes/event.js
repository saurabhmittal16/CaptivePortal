const controller = require('./../controller/event.js')

const routes = [
    {
        method: 'GET',
        url: '/api/event',
        handler: controller.findDetails
    }
];

module.exports = routes;