'use strict';
module.exports = function (app) {
    const commentController = require('../controllers/comment-controller');
    app.route('/comments')
        .get(commentController.list)
        .post(commentController.post);

 
    app.route('/comments/:id')
        .get(commentController.get)
        .put(commentController.put)
        .delete(commentController.delete);
};