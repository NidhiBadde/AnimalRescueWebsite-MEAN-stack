/**
 * Controller for comment endpoints.
 */

'use strict';
/**
 * Import comment service
 */
const commentService = require('../services/comment-service');
/**
 * Returns a list of comment in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (comment) => {
        response.status(200);
        response.json(comment);
    };
    commentService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new comment with the request JSON and
 * returns comment JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newComment = Object.assign({}, request.body);
    const resolve = (comment) => {
        response.status(200);
        response.json(comment);
    };
    commentService.save(newComment)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a comment object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (comment) => {
        response.status(200);
        response.json(comment);
    };
    commentService.get(request.params.id)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a comment object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const comment = Object.assign({}, request.body);
    const resolve = (comment) => {
        response.status(200);
        response.json(comment);
    };
    comment._id = request.params.id;
    commentService.update(comment)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a comment object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (comment) => {
        response.status(200);
        response.json({
            message: 'Comment Successfully deleted'
        });
    };
    commentService.delete(request.params.id)
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