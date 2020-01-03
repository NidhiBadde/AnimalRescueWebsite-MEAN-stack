'use strict';
module.exports = function (app) {
    const paymentController = require('../controllers/payment-controller');
    
    app.route('/animals')
        .get(paymentController.list)
        .post(paymentController.post);

 
    app.route('/animals/:id')
        .get(paymentController.get)
        .put(paymentController.put)
        .delete(paymentController.delete);
};