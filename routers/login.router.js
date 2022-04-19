const express = require('express');
const path = require('path');
const router = express.Router();
const jwt = require('jsonwebtoken');

const AccountModel = require('../models/account.model');

router.get('/', (req, res, next) => {
    const token = req.cookies.token;

    jwt.verify(token, 'password-admin', (err, decode) => {
        if (!err) {
            AccountModel.findOne({ _id: decode._id })
                .then(data => {
                    return res.json({ message: `welcome ${data.fullname}`, data })
                })
                .catch(err => {
                    return res.status(500).json(err)
                })
        } else {
            return res.sendFile(path.join(__dirname, '../views/login/index.html'));
        }
    })


})

router.post('/', (req, res, next) => {
    const { username, password } = req.body;
    AccountModel.findOne({
        username: username,
        password: password
    })
        .then(data => {
            const token = jwt.sign({ _id: data._id }, 'password-admin', { expiresIn: 1 * 60 });
            if (data) {
                return res.json({ message: 'sucessfully login', token: token })
            } else {
                return res.json({ message: 'unsucessfully login', token: null })
            }

        })
        .catch(err => {
            return res.json({ message: 'unsucessfully login', err })
        })
})

module.exports = router;