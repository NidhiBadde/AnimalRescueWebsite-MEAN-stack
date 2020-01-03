

'use strict';
module.exports = function (app) {
    const userController = require('../controllers/user-controller');
    app.route('/users')
        .get(userController.list)
        .post(userController.post);

    app.route('/users/:username')
        .get(userController.get)
 
    app.route('/users/:id')
        .put(userController.put)
        .delete(userController.delete);
};