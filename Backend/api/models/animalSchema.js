'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * schema maps to a MongoDB collection and defines the shape of the documents within that collection.
 */
let animalSchema = new Schema({
    name: {
        type: String,
        required: "name is required"
    },
    type: {
        type: String,
        required: "type is required"
    },
    specification: {
        type: String,
        required: "specification is required"
    },
    breed: {
        type: String,
        required: "breed is required"
    },
    status: {
        type: String,
        required: "status is required"
    },
    img: { 
        data: Buffer, 
        contentType: String 
    },

    crueltyCase: {
        data: String
    },

    adoptingUsers:[
        {type: Schema.Types.ObjectId, ref: 'Users'}
      ]
},

{
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
animalSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
animalSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Animals', animalSchema);