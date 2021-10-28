const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

// IAT indique l'heure à laquelle le JWT a été délivré. Cette allégation peut être utilisée pour déterminer l'âge du JWT

var verifyToken = (req,res,next)=>{
    var bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        var bearerToken = bearerHeader.split(" ")[1]; // here was the problem in the verify token we use [1]
        req.token = bearerToken;
        next();
    } else {
        res.setHeader('Contant-Type','text/palin');
        res.json({"ERROR": "TOKEN_NOT_FIND"});
    }
}


module.exports = verifyToken;

