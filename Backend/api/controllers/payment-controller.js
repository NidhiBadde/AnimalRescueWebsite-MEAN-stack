/**
 * Controller for payment endpoints.
 */

'use strict';
/**
 * Import payment service
 */
const paymentService = require('../services/payment-service');
/**
 * Returns a list of payment in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (payment) => {
        response.status(200);
        response.json(payment);
    };
    paymentService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new payment with the request JSON and
 * returns payment JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newPayment = Object.assign({}, request.body);
    const resolve = (payment) => {
        response.status(200);
        response.json(payment);
    };
    paymentService.save(newPayment)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a payment object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (payment) => {
        response.status(200);
        response.json(payment);
    };
    paymentService.get(request.params.id)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a payment object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const payment = Object.assign({}, request.body);
    const resolve = (payment) => {
        response.status(200);
        response.json(payment);
    };
    payment._id = request.params.id;
    paymentService.update(payment)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a payment object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (payment) => {
        response.status(200);
        response.json({
            message: 'payment Successfully deleted'
        });
    };
    paymentService.delete(request.params.id)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};