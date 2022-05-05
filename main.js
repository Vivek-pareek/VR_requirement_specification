const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require('path')

dotenv.config();

app.use(express.static(path.join(__dirname, 'resources')));


const connectionString =
"mongodb+srv://" + process.env.DB_USERNAME + ":" +
process.env.DB_PASSWORD +
"@cluster0.8bgpq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString);

var db = mongoose.connection;

db.on('connected', function(){
  console.log('Connected to database');
});

db.on('error', function(err) {
  console.log('Error in connecting to database : ' + err);
});


app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/login');
});

app.post('/', function(req, res){
    console.log();
    res.render('pages/login');
});

app.post('/register', function(req, res){
    console.log(req.body.uname);
    res.render('pages/login');
});

app.listen(8080);
console.log('Server is listening on port 8080');
