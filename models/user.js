let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new Schema({
  username : String,
  password : String,
  fullName : String,
  organizationName : String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Users", userSchema);
