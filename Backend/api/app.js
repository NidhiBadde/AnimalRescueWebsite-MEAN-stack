'use strict';
/**
 * This function exports model and routes
 */
module.exports = function (app) {
    //Initialize models
    let userSchema = require('./models/userSchema');
    let animalSchema = require('./models/animalSchema');
    let eventSchema = require('./models/eventSchema');
    let commentSchema = require('./models/commentSchema');
    let paymentSchema = require('./models/paymentSchema');
    let donationSchema = require('./models/donationSchema');
    let asKQuestionSchema = require('./models/askQuestion');
    //Initialize routes
    let animalRoutes = require('./routes/animal-route');
    let eventRoutes = require('./routes/event-route');
    let userRoutes = require('./routes/user-route');
    let commentRoutes = require('./routes/comment-route');
    let paymentRoutes = require('./routes/payment-route');
    let donationRoutes = require('./routes/donation-route');
    let askQuestionRoutes = require('./routes/askQuestion-route');
    animalRoutes(app);
    eventRoutes(app);
    userRoutes(app);
    commentRoutes(app);
    paymentRoutes(app);
    donationRoutes(app);
    askQuestionRoutes(app);
};