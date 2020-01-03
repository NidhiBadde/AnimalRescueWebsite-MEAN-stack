'use strict';
module.exports = function (app) {
    const donationController = require('../controllers/donation-controller');
    app.route('/donations')
        .get(donationController.list)
        .post(donationController.post);

};