const express = require('express');
const path = require('path');
const router = express.Router();

const AccountModel = require('../models/account.model');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/login/index.html'));
})

router.post('/', (req, res, next) => {
    const { username, password } = req.body;
    AccountModel.findOne({
        username: username,
        password: password
    })
        .then(data => {
            if (data) {
                res.json({ Notification: 'sucessfully login', data: data })
            } else {
                res.json({ Notification: 'unsucessfully login', data: data })
            }

        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;