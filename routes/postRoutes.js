const express = require('express');
const postControllers = require('../controllers/postController');

const router = express.Router();

router.route('/')
    .get(postControllers.getAllPosts)
    .post(postControllers.createPost)

router.route('/:id')
    .get(postControllers.getOnePost)
    .patch(postControllers.updatePost)
    .delete(postControllers.deletePost)


module.exports = router;