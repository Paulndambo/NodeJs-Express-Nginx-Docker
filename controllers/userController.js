const User = require("../models/userModel");
//const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
    const { email, username, password } = req.body;
    //const hashedpassword = bcrypt.hash(password, 12);

    try {
    const user = await User.create({
        email,
        username,
        password
    })
    res.status(201).json({
        status: "success",
        data: {
            user,
        },
    })
    } catch(e){
        res.status(400).json({
            status: "failed",
            message: e.message,
        })
    }
};

exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    //const hashedpassword = bcrypt.hash(password, 12);

    try {
        const user = await User.findOne({ username: username})
        if (!user) {
            return res.status(400).json({
            status: "failed",
            message: "User not found",
        });
        }
        const isCorrect = password === user.password;
        if (isCorrect) {
            return res.status(200).json({
                status: "success",
                data: {
                    user,
                },
                message: "User Logged In Successfully"
            });
        } else {
            return res.status(400).json({
                status: "failed",
                message: "Incorrect password",
            });
        }
    } 
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message,
            });
        }
    }
