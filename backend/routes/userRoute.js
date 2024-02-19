    const express = require("express");
const RegistrationVal = require("../middleware/RegistrationVal");
const { Register, Login } = require("../controller/AuthController");
 
const { userModel } = require("../model/userModel");

    
   
    
   
    const userRoute = express.Router();

    userRoute.post("/register", RegistrationVal, Register);
    userRoute.post("/login", Login);
    

   



    module.exports = {
      userRoute,
    };