const express = require("express");
const router = express.Router();
const Post = require("../models/postmodel");


const data={
    posts:""
}

router.get("/posts",async function(req,res){
    try{
        const posts = await Post.findAll({});
        res.status(200).render("Posts",{
            posts
        });
    }catch(err){
        console.log(err);
        return res.status(500);       
    }
})

module.exports=router;