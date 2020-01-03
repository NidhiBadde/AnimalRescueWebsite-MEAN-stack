
'use strict';
module.exports = function (app) {
    const eventController = require('../controllers/event-controller');
    app.route('/events')
        .get(eventController.list)
        .post(eventController.post);

 
    app.route('/events/:id')
        .get(eventController.get)
        .put(eventController.put)
        .delete(eventController.delete);
};