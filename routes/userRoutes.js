const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
=======
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
>>>>>>> b02359d98ea123451f133a7d89a037061894b3a0
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");

<<<<<<< HEAD
router.post('/register', async (req,res) => {
    try{
     const password = req.body.password
     const salt = await bcrypt.genSaltSync(10);
     const hashedPassword = await bcrypt.hashSync(password, salt);
     req.body.password = hashedPassword;
     const user = new User(req.body);
     const existingUser = await User.findOne({email: req.body.email});
    if (existingUser)
    {
        return res.status(200).send({message:'User already exists', success: false});
    }else{
        await user.save();
        return res.status(200).send({message:'User registered successfully' , success: true});
    }
}catch(error){ 
    return res.status(500).send ({message: err.message, success: false});
=======
router.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    req.body.password = hashedPassword;
    const user = new User(req.body);
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(200)
        .send({ message: "User already exists", success: false });
    } else {
      await user.save();
      return res
        .status(200)
        .send({ message: "We Ride at Dawn", success: true });
>>>>>>> b02359d98ea123451f133a7d89a037061894b3a0
    }
  } catch (error) {
    return res.status(500).send({ message: error.message, success: false });
  }
});

<<<<<<< HEAD
router.post('/login', async (req, res) => {
    try{
       const user = await User.findOne({email: req.body.email});
       if(!user){
        return res
        .status(200)
        .send({
            message:"User does not exist", 
            success: false
        });
       } 
       const passwordsMatched = await bcrypt.compareSync(
        req.body.password,
        user.password
       );
       if(passwordsMatched)
       {
        const token = jwt.sign({ userId:user._id}, process.env.SECRET_KEY, {
            expiresIn: "1h"
        });
        return res
        .status(200)
        .send({
            message: "User logged in successfully", 
            success:true, 
            data: token
        });
       }else{
        return res.status(200)
        .send({message: "password is incorrect", success:false});
       }

    }catch(err){
     return res.status(500).send({message:err.message, success: false});
=======
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "User does not exist", success: false });
>>>>>>> b02359d98ea123451f133a7d89a037061894b3a0
    }
    const passwordsMatched = await bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (passwordsMatched) {
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1d",
      });
      return res.status(200).send({
        message: "User logged in successfully",
        success: true,
        data: token,
      });
    } else {
      return res
        .status(200)
        .send({ message: "Password is incorrect", success: false });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message, success: false });
  }
});

router.post("/get-user-data", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    user.password = undefined;
    return res.status(200).send({
      message: "User data fetched successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message, success: false });
  }
});

<<<<<<< HEAD
module.exports = router; 
=======
module.exports = router;
>>>>>>> b02359d98ea123451f133a7d89a037061894b3a0
