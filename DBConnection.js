const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const connectionString =
"mongodb+srv://" + process.env.DB_USERNAME + ":" +
process.env.DB_PASSWORD +
"@cluster0.8bgpq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = async function() {
  try{
    await mongoose.connect(connectionString);

    let conn = mongoose.connection;

    conn.on('connected', function(){
      console.log("Connected to database...");
    });
    return conn;
  }
  catch(error){
    console.log(error);
  }
}
