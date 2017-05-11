/**
 * Created by asto on 2017/5/10.
 */
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:String,
    password:String,

});
module.exports = mongoose.model('User',UserSchema);