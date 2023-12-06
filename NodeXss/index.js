const express = require("express");
const createPostRouter = require("./routes/createPost");
const posts = require("./routes/posts");
const body_parser = require("body-parser");
const path = require("path");
app = express();

//Template engine 
app.set("view engine","ejs");
app.get("view engine");

//Middleware
app.use(express.urlencoded({extended:false}));
app.use(body_parser.json());
app.use("/css",express.static(path.join(__dirname,'css')));
app.use("/javascript",express.static(path.join(__dirname,'javascript')));


//Routers
app.use("/create/",createPostRouter);
app.use("/",posts);

app.use("/",function(req,res){
    res.send("Welcome")
});

app.listen(3000,function(req,res){
     console.log("Server Starded");
});