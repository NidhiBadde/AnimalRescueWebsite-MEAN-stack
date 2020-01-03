/**
 * Service for noRest operations.
 */

'use strict';
/** 
 * require mongoose
 */
const mongoose = require('mongoose'),
Payments = mongoose.model('Payments');

/**
 * Returns an array of payment objects.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Payments.find(params).exec();
    return promise;
};

/**
 * Saves and returns the new payment object.
 *
 * @param {Object} payment {payment object}
 */
exports.save = function (payment) {
    const newEvent = new Payments(payment);
    const promise = newEvent.save();
    return promise;
};

/**
 * Returns the payment object matching the id.
 *
 * @param {string} paymentId {Id of the payment object}
 */
exports.get = function (paymentId) {
    const promise = Payments.findById(paymentId).exec();
    return promise;
};

/**
 * Updates and returns the payment object.
 *
 * @param {Object} payment {payment object}
 */
exports.update = function (payment) {
    const promise = Payments.findOneAndUpdate({_id: payment._id}, payment).exec();
    return promise;
};

/**
 * Deletes the payment object matching the id.
 *
 * @param {string} paymentId {Id of the payment object}
 */
exports.delete = function (paymentId) {
    const promise = Payments.remove({_id: paymentId});
    return promise;
};