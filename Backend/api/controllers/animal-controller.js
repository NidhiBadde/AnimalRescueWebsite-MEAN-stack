/**
 * Controller for animal endpoints.
 */

'use strict';
/**
 * Import animal service
 */
const animalService = require('../services/animal-service');
/**
 * Returns a list of animal in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (animal) => {
        response.status(200);
        response.json(animal);
    };
    animalService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new animal with the request JSON and
 * returns animal JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newanimal = Object.assign({}, request.body);
    const resolve = (animal) => {
        response.status(200);
        response.json(animal);
    };
    animalService.save(newanimal)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a animal object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (animal) => {
        response.status(200);
        response.json(animal);
    };
    animalService.get(request.params.id)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a animal object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const animal = Object.assign({}, request.body);
    const resolve = (animal) => {
        response.status(200);
        response.json(animal);
    };
    animal._id = request.params.id;
    animalService.update(animal)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a animal object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (animal) => {
        response.status(200);
        response.json({
            message: 'animal Successfully deleted'
        });
    };
    animalService.delete(request.params.id)
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