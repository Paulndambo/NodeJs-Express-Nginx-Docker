const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Post must contain text']
        },
        author: {
            type: String,
            required: [true, 'Post must contain author']
        },
        description: {
            type: String,
            required: [true, 'Post must contain body']
        },
    });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
