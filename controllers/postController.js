const Post = require('../models/postModels');

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            status: "success",
            results: posts.length,
            data: {
                posts
            },
        });
    } catch (e) {
        res.status(404).json({  
            status: "error",
            message: "Post not found"
        });
    }
};

exports.getOnePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: post
        })
    } catch (err) {             
        res.status(400).json({
            status: "failed"
        });
    };
};

exports.createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        res.status(200).json({
            status: "success",
            data: {
                post,
            },
        })
        
    } catch (err) { 
        console.log(err)
        res.status(400).json({
            status: "failed"
        });
    };
};

exports.updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            status: "success",
            data: post
            })
            } catch (err) {
                res.status(400).json({
                status: "failed"
        });
    };
};

exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success"
        })
    } catch (err) { 
        res.status(400).json({
            status: "failed"
        });
    };
};


