'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * schema maps to a MongoDB collection and defines the shape of the documents within that collection.
 */
let paymentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: "userId is required"
    },
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'Events',
        required: "eventId is required"
    },
    details: {
        type: String,
        required: "Details is required"
    },
    amount: {
        type: String,
        required: "amount is required"
    },
    type: {
        type: String,
        required: "type is required"
    }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
paymentSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
paymentSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Payments', paymentSchema);