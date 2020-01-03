'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * schema maps to a MongoDB collection and defines the shape of the documents within that collection.
 */
let donationSchema = new Schema({
    firstName: {
        type: String,
        required: "first name is required"
    },
    lastName: {
        type: String,
        required: "last name is required"
    },
    email: {
        type: String,
        required: "email is required"
    },
    donationAmount: {
        type: String,
        required: "donation amount is required"
    }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
donationSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
donationSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Donation', donationSchema);