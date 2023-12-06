const express = require("express");
const router = express.Router();
const Post = require("../models/postmodel");
const sequelize = require("sequelize");

const validUrl= require("../middleware/validation");



router.get("/post",async function(req,res){
     res.render("Post",msj={
        msg:"",
     });
});

router.post("/post",async function(req,res) {
    data={
        title:req.body.title,
        dest:req.body.dest,
        url: req.body.url
    }

    //Validation 1
    if (req.body.title.match(/[<>"'<>]/)){
        return res.status(400).render("Post",msj={
            msg:"İnvalid Title !",
         });
    }
    
    //Validation 2
    if (req.body.dest.match(/[<>"'<>]/)){
        return res.status(400).render("Post",msj={
            msg:"İnvalid description !"
         });
    } 

    //Validation 3
    let url = req.body.url;
    if (!url.startsWith("http") && !url.startsWith("https")){
        return res.status(400).render("Post",msj={
            msg:"İnvalid Url !",
         });
    }
    //Validation 3
    if (!validUrl(url)){
        return res.status(400).render("Post",msj={
            msg:"İnvalid Url !",
         });
    }
    try{
        res.status(200);
        await Post.create({
            title:data.title,
            description:data.dest,
            url:data.url
        })
    }catch(err){
        console.log(err)
    };
    res.status(200).redirect("/posts");
});

module.exports = router;