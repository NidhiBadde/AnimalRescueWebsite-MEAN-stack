'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * schema maps to a MongoDB collection and defines the shape of the documents within that collection.
 */
let commentSchema = new Schema({
    comment: {
        type: String,
        required: "comment is required"
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        //required: "userId is required"
    },
    animalId: {
        type: Schema.Types.ObjectId,
        ref: 'Animals',
        //required: "AnimalId is required"
    }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
commentSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
commentSchema.set('toJSON', {
    virtuals: true
});
module.exports = mongoose.model('Comments', commentSchema);