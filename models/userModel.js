const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
    type: String,
    required: [true, 'Email cannot be empty'],
    unique: true,
    },
    username: {
        type: String,
        required: [true, 'Username cannot be empty'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password cannot be empty'],
    }
    });

const User = mongoose.model('User', userSchema);
module.exports = User;
