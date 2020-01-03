/**
 * Service for noRest operations.
 */

'use strict';
/** 
 * require mongoose
 */
const mongoose = require('mongoose'),
Events = mongoose.model('Events');

/**
 * Returns an array of event objects.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Events.find(params).exec();
    return promise;
};

/**
 * Saves and returns the new event object.
 *
 * @param {Object} event {event object}
 */
exports.save = function (event) {
    const newEvent = new Events(event);
    const promise = newEvent.save();
    return promise;
};

/**
 * Returns the event object matching the id.
 *
 * @param {string} eventId {Id of the event object}
 */
exports.get = function (eventId) {
    const promise = Events.findById(eventId).exec();
    return promise;
};

/**
 * Updates and returns the event object.
 *
 * @param {Object} event {event object}
 */
exports.update = function (event) {
    const promise = Events.findOneAndUpdate({_id: event._id}, event).exec();
    return promise;
};

/**
 * Deletes the event object matching the id.
 *
 * @param {string} eventId {Id of the event object}
 */
exports.delete = function (eventId) {
    const promise = Events.remove({_id: eventId});
    return promise;
};