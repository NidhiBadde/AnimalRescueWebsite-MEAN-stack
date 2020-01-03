'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * schema maps to a MongoDB collection and defines the shape of the documents within that collection.
 */
let askQuestionSchema = new Schema({
    Question: {
        type: String,
        required: "question is required"
    }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
askQuestionSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
askQuestionSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Askquestion', askQuestionSchema);