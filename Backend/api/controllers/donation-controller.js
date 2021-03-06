/**
 * Controller for donation endpoints.
 */

'use strict';
/**
 * Import donation service
 */
const donationService = require('../services/donation-service');
/**
 * Returns a list of Donation in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (donation) => {
        response.status(200);
        response.json(donation);
    };
    donationService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new donation with the request JSON and
 * returns donation JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newDonation = Object.assign({}, request.body);
    const resolve = (donation) => {
        response.status(200);
        response.json(donation);
    };
    donationService.save(newDonation)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a donation object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (donation) => {
        response.status(200);
        response.json(donation);
    };
    donationService.get(request.params.id)
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