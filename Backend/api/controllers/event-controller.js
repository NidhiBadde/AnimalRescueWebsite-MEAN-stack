/**
 * Controller for event endpoints.
 */

'use strict';
/**
 * Import event service
 */
const eventService = require('../services/event-service');
/**
 * Returns a list of event in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (event) => {
        response.status(200);
        response.json(event);
    };
    eventService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new event with the request JSON and
 * returns event JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newEvent = Object.assign({}, request.body);
    const resolve = (event) => {
        response.status(200);
        response.json(event);
    };
    eventService.save(newEvent)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a event object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (event) => {
        response.status(200);
        response.json(event);
    };
    eventService.get(request.params.id)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a event object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const event = Object.assign({}, request.body);
    const resolve = (event) => {
        response.status(200);
        response.json(event);
    };
    event._id = request.params.id;
    eventService.update(event)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a event object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (event) => {
        response.status(200);
        response.json({
            message: 'event Successfully deleted'
        });
    };
    eventService.delete(request.params.id)
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