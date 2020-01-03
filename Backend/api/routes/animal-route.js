'use strict';
module.exports = function (app) {
    const animalController = require('../controllers/animal-controller');
    app.route('/animals')
        .get(animalController.list)
        .post(animalController.post);

 
    app.route('/animals/:id')
        .get(animalController.get)
        .put(animalController.put)
        .delete(animalController.delete);
};