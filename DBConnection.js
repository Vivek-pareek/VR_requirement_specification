const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const connectionString =
"mongodb+srv://" + process.env.DB_USERNAME + ":" +
process.env.DB_PASSWORD +
"@cluster0.8bgpq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString);

let conn = mongoose.connection;

conn.on('connected', function(){
  console.log("Connected to database...");
});

conn.on('disconnected', function(){
  console.log("Disconnected from database...");
});

conn.on('error', function(){
  console.log("Could not connect to database");
});

module.exports = conn;
