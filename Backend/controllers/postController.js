const {Posts} = require("../models/");


const addPost = async(req, res)=>{
    const post = req.body;
    try{
        await Posts.create(post);
        res.json(post);
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const getPost = async(req, res)=>{
    try{
        const listOfPosts = await Posts.findAll();
        res.json(listOfPosts);
    }catch(error){
        res.status(400).json({error: error.message})
    }
    
}


module.exports = {
    addPost,
    getPost
};