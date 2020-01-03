/**
 * Service for noRest operations.
 */

'use strict';
require('dotenv').config();
const nodemailer=require('nodemailer');
/** 
 * require mongoose
 */
const mongoose = require('mongoose'),
    Users = mongoose.model('Users');

/**
 * Returns an array of User objects.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Users.find(params).exec();
    return promise;
};

/**
 * Saves and returns the new user object.
 *
 * @param {Object} User {User object}
 */
exports.save = function (user) {
    let transporter=nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:process.env.EMAIL,
                        pass:process.env.PASSWORD
                    }
        });
        console.log(' --- user ' + user);
        var mailOptions = {
            from: 'pawfectadoption@gmail.com',
            to: user.email,
            subject: 'Sign up',
            text: 'Thank you ' + user.username + ' for signing up to Pawfect!'
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent');
            }
        });
    const newUser = new Users(user);
    const promise = newUser.save();
    return promise;
};

/**
 * Returns the user object matching the id.
 *
 * @param {string} userId {Id of the user object}
 */
exports.get = function () {
    const promise = Users.find().exec();
    return promise;
};

/**
 * Updates and returns the user object.
 *
 * @param {Object} user {User object}
 */
exports.update = function (user) {
    const promise = Users.findOneAndUpdate({_id: user._id}, user).exec();
    return promise;
};

/**
 * Deletes the user object matching the id.
 *
 * @param {string} userId {Id of the user object}
 */
exports.delete = function (userId) {
    const promise = Users.remove({_id: userId});
    return promise;
};