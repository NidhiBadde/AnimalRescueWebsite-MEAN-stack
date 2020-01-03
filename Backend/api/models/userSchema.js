'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * schema maps to a MongoDB collection and defines the shape of the documents within that collection.
 */
let userSchema = new Schema({
    name: {
        type: String,
        required: "name is required"
    },
    username: {
        type: String,
        required: "username is required"
    },
    password: {
        type: String,
        required: "password is required"
    },
    type: {
        type: String,
        required: "type is required"
    },
    address: {
        type: String,
        required: "address is required"
    },
    dob: {
        type: Date,
        required: "Date is required"
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
userSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
userSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Users', userSchema);