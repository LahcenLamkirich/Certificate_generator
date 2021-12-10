var express = require('express');
var router = express.Router();
const xlsx = require('xlsx');
const multer  = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
var mongodb = require('mongodb');

const verifyToken = require('../middleware/verifyToken');

var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
        if(!path.extname(file.originalname).localeCompare('.xlsx')) callback(null, './public/excel/');
        else callback(null, './public/images/');
    },
    filename: function (req, file, callback) {
        if(!path.extname(file.originalname).localeCompare('.xlsx')) callback(null, file.originalname);
        else callback(null, req.body.formationName+''+path.extname(file.originalname));
    }
});
var upload = multer({ storage : storage });

function readFile(fileName){
    const filePath = "public/excel/"+fileName;
    const workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    
    let posts = [];
    let post = {};
    
    for (let cell in worksheet) {
        const cellAsString = cell.toString();
    
        if (cellAsString[1] !== 'r' && cellAsString[1] !== 'm' && cellAsString[1] > 1) {
            if (cellAsString[0] === 'A') {
                post.nom = worksheet[cell].v;
            }
            if (cellAsString[0] === 'B') {
                post.prenom = worksheet[cell].v;
            }
            if (cellAsString[0] === 'C') {
                post.email = worksheet[cell].v;
            }
            if (cellAsString[0] === 'D') {
                post.adresse = worksheet[cell].v;
                posts.push(post);
                post = {};
            }
        }
    }
    return posts;
}
router.post("/add", verifyToken, upload.array('file'), (req, res)=>{
    jwt.verify(req.token, process.env.TOKEN_SECRET, (err,data)=>{
        if(err) 
            console.log(err)
        else{
            console.log(data)
            if(data.result.role == 'admin'){
                if(req.body.formationName && req.files){
                    data = readFile(req.files[0].originalname);
                    data.forEach(element => {
                        let participant = {
                            formationName: req.body.formationName,
                            nom: element.nom.toLowerCase(),
                            prenom: element.prenom.toLowerCase(),
                            email: element.email,
                            adresse: element.adresse,
                            role: "user"
                        }

                        dbo.collection('participants').insertOne(participant, (err, result)=> {
                            if (err) 
                                res.send(err);
                            else{
                            }
                            
                        })
                    });
                    res.status(200).send({MESSAGE: "ADD_SUCCES"});
                } else{
                    res.send({ERROR: "BODY_ERREUR"})
                }
            } else{
                res.json({"ERROR" : "NO_ACCESS"});
            }
        }
    })
})

router.get("/findByFormation/:formationName", (req, res)=>{
    dbo.collection('participants').find({'formationName': req.params.formationName}).toArray((err, result)=> {
        if (err) 
            res.send(err);
        else{
            res.status(200).send(result);
        }
        
    })
})

router.get("/findFormations", (req, res)=>{
    dbo.collection('participants').distinct("formationName", (err, result)=> {
        if (err) 
            res.send(err);
        else{
            res.status(200).send(result);
        }
        
    })
})

router.delete("/delete/:id", (req, res)=>{
        dbo.collection("participants").deleteOne({_id: new mongodb.ObjectId(req.params.id)}, (err, result)=> {
            if (err) 
                throw err;
            else{
                console.log(result)
                if(result.deletedCount != 0)  res.status(200).send({MESSAGE: "DELETE_SUCCES"});
                else res.send({ERROR: "N'existe pas"})
            }
        })
})

// admin route 

// router.get('/admin', function(req, res) {
//     dbo.collection("participants").find({}, { projection: { _id: 0, nom: 1, role: 1 } }).toArray(function(err, result) {
//         if(err)
//             res.s    end(err)
//         else {
//             // result.forEach(element => {
//             //     if(element.role == 'admin')
//             //         res.status(200).send(element.nom);
//             // });
//             for(let i = 0 ; i < result.length; i++){
//                 if(result[i].role == 'admin')
//                     res.status(200).send(result[i].nom) ;
//             }            
//         }
//     });
//   });

router.post("/findFormationsParticiper", (req, res)=>{
    if(req.body.nom && req.body.prenom){
        dbo.collection('participants').distinct("formationName", {nom: req.body.nom, prenom: req.body.prenom}, (err, result)=> {
            if (err) 
                res.send(err);
            else{
                res.status(200).send(result);
            }
            
        })
    } else {
        res.send({ERROR: "BODY_ERROR"})
    }
})






module.exports = router;
