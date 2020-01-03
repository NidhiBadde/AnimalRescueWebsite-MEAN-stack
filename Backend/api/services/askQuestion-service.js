
'use strict';

const mongoose = require('mongoose'),
    Question = mongoose.model('Askquestion');

    exports.search = function (params) {
        const promise = Question.find(params).exec();
        return promise;
    };

    exports.save = function (question) {
        console.log(question);
        const newQuestion = new Question(question);
        const promise = newQuestion.save();
        console.log(promise);
        return promise;
    };

    exports.get = function (questionId) {
        const promise = Question.findById(questionId).exec();
        return promise
    };

    exports.update = function (Question) {
        Question.modified_date = new Date();
        const promise = Question.findOneAndUpdate({_id: Question._id},Question).exec();
        return promise;
    };


    exports.delete = function (questionId) {
        const promise = Question.remove({_id: questionId});
        return promise;
    };