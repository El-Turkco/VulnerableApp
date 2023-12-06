const {DataTypes} = require ("sequelize");
const sequelize = require("../database/db");
 

const Post = sequelize.define("post",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull: false,
        unique:false,
        uppercase:true,
       
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:false,
        uppercase:true,
       
    },
    url:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:false,
       
    }


},{timestamps:false});

module.exports=Post;