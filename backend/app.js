var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');


const port = 3333

var signInRouter = require('./routes/signIn');
var participantRouter = require('./routes/participant');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
dotenv.config();

const url = 'mongodb://localhost:27017';
 

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
	if (err) {
		throw err;
	} else {
        console.log("Connected");
        global.dbo = db.db('Stage3');
    }
});


app.use('/users', signInRouter);
app.use('/participants', participantRouter);


app.listen(port, ()=>{
    console.log(`app listening at port: ${port}`)
})

module.exports = app;
 