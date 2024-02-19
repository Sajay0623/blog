const mongoose = require ("mongoose")
const userSchema = mongoose.Schema({
    first_name : {type : String , require : true},
    last_name : {type : String },
    email : {type : String , require : true} ,
    password : {type : String , require : true} , 
    gender : {type : String , require : true}

})

const userModel = mongoose.model("user" , userSchema) 

module.exports = {
    userModel
}