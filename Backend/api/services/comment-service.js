
'use strict';

const mongoose = require('mongoose'),
    Comment = mongoose.model('Comments');

    exports.search = function (params) {
        const promise = Comment.find(params).exec();
        return promise;
    };

    exports.save = function (comment) {
        const newComment = new Comment(comment);
        const promise = newComment.save();
        return promise;
    };

    exports.get = function (commentId) {
        const promise = Comment.findById(commentId).exec();
        return promise
    };

    exports.update = function (comment) {
        comment.modified_date = new Date();
        const promise = Comment.updateOne({_id: comment._id},comment);
        //const promise = Comment.findOneAndUpdate({_id: Comment._id},Comment, {new: true});
        return promise;
    };


    exports.delete = function (commentId) {
        const promise = Comment.remove({_id: commentId});
        return promise;
    };