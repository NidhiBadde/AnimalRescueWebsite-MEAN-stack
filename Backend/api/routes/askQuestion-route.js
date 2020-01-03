'use strict';
module.exports = function (app) {
    const askQuationController = require('../controllers/askQuestion-controller');
    app.route('/questions')
        .get(askQuationController.list)
        .post(askQuationController.post);

};