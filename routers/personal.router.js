const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs')

const AccountModel = require('../models/account.model');

router.get("/", (req, res) => {
    const token = req.cookies['authorization'].split(' ')[1];
    const publicKey = fs.readFileSync('./key/public.pem');
    jwt.verify(token, publicKey, { algorithms: 'RS256' }, (err, decoded) => {
        const user = AccountModel.findOne({ _id: decoded }, (err, user) => {
            if (user) return res.json(user)
        })
    });
});


module.exports = router;
