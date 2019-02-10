const controller = require('./../controller')

const routes = [
    {
        method: 'GET',
        url: '/api/event',
        handler: controller.findEventDetails
    }
];

module.exports = [].concat(routes)
