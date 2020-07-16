var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    
    name: String,
    id: String,
    type: String,
    username: String,
    password: String,
    assignedEmployees:[{ id: Number, username: String }],
    reviews:String
});

const user = mongoose.model('users', userSchema)

module.exports = user;