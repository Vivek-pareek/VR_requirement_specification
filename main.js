var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var dotenv = require("dotenv");
var path = require("path");
var db = require("./DBConnection.js");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

const databaseConnection = db;

//variable to hold default Specifications data object
let specsData = require("./resources/default_specs.json");

dotenv.config();

app.use(express.static(path.join(__dirname, 'resources')));

app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/login');
});

app.get('/test', function(req, res){
    res.render('pages/vreqsl');
});

app.post('/', function(req, res){
    res.render('pages/login');
});

app.post('/register', function(req, res){
    res.render('pages/login', {data: specsData});
});

app.listen(8080);
console.log('Server is listening on port 8080');
