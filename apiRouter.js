const express = require('express');
const router = express.Router();

const AccountModel = require('./models/account');

router.post('/register', (req, res) => {
    const {username,password,fullname,role} = req.body;
    AccountModel.create({
        username : username,
        password: password,
        fullname:fullname,
        role:role
    }).then(data=>{
        res.json({ Notification: "Register successfull", Data: data })
    }).catch(err=>{
        res.status(400);
        res.json({ Notification: "Register unsuccessfull", Error: err })
    })
   
})

router.post('/login', (req, res) => {
    const {username,password} = req.body;
    AccountModel.find({
        username : username,
        password:password
    }).then(data=>{
        res.json({ Notification: "Login successfull", Data: data })
    }).catch(err=>{
        res.status(400);
        res.json({ Notification: "Login unsuccessfull", Error: err })
    })
})

router.get('/list-accounts', (req, res) => {
    const {username,password} = req.body;
    AccountModel.find({})
    .then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(400);
        res.json(err)
    })
})

module.exports = {
    router
} 