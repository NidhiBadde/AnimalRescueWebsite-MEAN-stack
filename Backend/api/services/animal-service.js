
'use strict';

const mongoose = require('mongoose'),
    Animal = mongoose.model('Animals');

    exports.search = function (params) {
        const promise = Animal.find(params).exec();
        console.log(Animal.find(params).exec());
        return promise;
    };

    exports.save = function (animal) {
        const newAnimal = new Animal(animal);
        const promise = newAnimal.save();
        return promise;
    };

    exports.get = function (animalId) {
        const promise = Animal.findById(animalId).exec();
        return promise
    };

    exports.update = function (animal) {
        animal.modified_date = new Date();
        const promise = Animal.findOneAndUpdate({_id: animal._id},animal).exec();
        return promise;
    };


    exports.delete = function (animalId) {
        const promise = Animal.remove({_id: animalId});
        return promise;
    };