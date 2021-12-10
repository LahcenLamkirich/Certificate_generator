var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/signIn', function(req, res) {
   if(req.body.nom && req.body.prenom){
    var user = {
      'nom' : req.body.nom.toLowerCase(),
      'prenom' : req.body.prenom.toLowerCase()
    }
  
    dbo.collection("participants").findOne({'nom':user.nom, 'prenom': user.prenom}, async (err,result)=>{
      if(err) 
          throw err
      else{
          if(result) {
            var token = jwt.sign({result}, process.env.TOKEN_SECRET);
            
            if(result.role == 'user'){
              formationsPrticiper = await dbo.collection('participants').distinct("formationName", {nom: user.nom, prenom: user.prenom})
              res.status(200).json({"token" : token, "role" : "user", "formationsPrticiper": formationsPrticiper});
            }
            else {
                res.status(200).json({"token" : token, "role" : "admin"});
            }
          } else {
              res.json({ERROR : "Incorrect nom ou prenom."});
          }
      }
    })
  }
});


  // if(req.body.nom && req.body.prenom){
  //   var user = {
  //     'nom' : req.body.nom.toLowerCase(),
  //     'prenom' : req.body.prenom.toLowerCase()
  //   }
  
  //   dbo.collection("participants").findOne({'nom':user.nom, 'prenom': user.prenom}, (err,result)=>{
  //       if(err) 
  //           throw err
  //       else{
  //           if(result) {
  //             //token
  //             var token = jwt.sign({result}, process.env.TOKEN_SECRET);
  //             if(result.role == 'user'){
  //                 res.status(200).json({"token" : token, "role" : "user"});
  //             }
  //             else {
  //                 res.status(200).json({"token" : token, "role" : "admin"});
  //             }
  //           } else {
  //               res.json({ERROR : "Incorrect nom ou prenom."});
  //           }
  //       }
  //   })
  // }

module.exports = router;
