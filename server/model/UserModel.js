const mongoose = require('mongoose');
const Userschema = require('../migration/UserSchema.json')
const userSchema = new mongoose.Schema(Userschema)

module.exports = mongoose.model("users",userSchema)