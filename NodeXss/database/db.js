const mysql = require("mysql2");
const config= require("../config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.db.database,config.db.user,config.db.password,config.db.port,{
    host:config.db.host,
    port:config.db.port,
    dialect:"mysql2",
    storage:"./session.mysql"
});

async function connect(){
    try{
        await sequelize.authenticate();
        console.log("mysql server start");
    }
    catch(err){
        console.log(err);
    }
};
connect()
module.exports=sequelize;