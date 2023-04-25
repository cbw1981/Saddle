const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

router.post('/register', async (req,res) => {
    try{
     const password = req.body.password
     const salt = await bcrypt.genSaltSync(10);
     const hashedPassword = await bcrypt.hashSync(password, salt);
     req.body.password = hashedPassword
     const user = new User(req.body);
     const existingUser = await User.findOne({email: req.body.email});
    if(exisrtingUser)
    {
        return res.status(404).send ('User already exists');
    }
}catch(err){ 

    }
})