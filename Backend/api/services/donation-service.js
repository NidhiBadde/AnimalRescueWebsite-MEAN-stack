

'use strict';
  require('dotenv').config();
   const nodemailer=require('nodemailer');
const mongoose = require('mongoose'),
    Donation = mongoose.model('Donation');

    exports.search = function (params) {
        const promise = Donation.find(params).exec();
        return promise;
    };

    exports.save = function (donation) {
      
       
        let transporter=nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:process.env.EMAIL,
                        pass:process.env.PASSWORD
                    }
        });

        var mailOptions = {
            from: 'pawfectadoption@gmail.com',
            to:  user.email,
            subject: 'Donation',
            text: 'Thank you  ' + user.username + ' for your donation to Pawfect!'
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent');
            }
        });
        const newDonation = new Donation(donation);
        const promise = newDonation.save();
        return promise;
    };

    exports.get = function (donationId) {
        const promise = Donation.findById(donationId).exec();
        return promise
    };

    exports.update = function (Donation) {
        Donation.modified_date = new Date();
        const promise = Donation.findOneAndUpdate({_id: Donation._id},Donation).exec();
        return promise;
    };


    exports.delete = function (donationId) {
        const promise = Donation.remove({_id: donationId});
        return promise;
    };