const express = require("express")
const router = express.Router();
module.exports= function validUrl(paramss){    
    const xss = new RegExp(/(\s|\w|\d|\.|\,|\;|\:|\?|\!|\|\#|\$|\%|\^|\&|\*|\(|\)|\_|\~|\`|\'|\\|\-|\/|\+)*?$/)
    if (paramss.match(xss)){
        return true;
    }

};

