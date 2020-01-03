/**
 * Controller for user endpoints.
 */

'use strict';
/**
 * Import user service
 */
const userService = require('../services/user-service');
/**
 * Returns a list of user in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (user) => {
        response.status(200);
        response.json(user);
    };
    userService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new user with the request JSON and
 * returns user JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newUser = Object.assign({}, request.body);
    const resolve = (user) => {
        response.status(200);
        response.json(user);
    };
    userService.save(newUser)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a user object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (user) => {
        response.status(200);
        response.json(user);
    };
    userService.get({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a user object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const user = Object.assign({}, request.body);
    const resolve = (user) => {
        response.status(200);
        response.json(user);
    };
    user._id = request.params.id;
    userService.update(user)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a user object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (user) => {
        response.status(200);
        response.json({
            message: 'User Successfully deleted'
        });
    };
    userService.delete(request.params.id)
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