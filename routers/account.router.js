const express = require('express');
const router = express.Router()

const AccountModel = require('../models/account.model')

// Get all 
router.get('/', (req, res, next) => {
    AccountModel.find({})
        .then(data => {
            res.json({method:'GET',data});
        })
        .catch(err => {
            res.json(err)
        })
})

// Get one
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    AccountModel.find({
        _id: id
    })
        .then(data => {
            res.json({method:'GET',data});
        })
        .catch(err => {
            res.json(err)
        })
})

// create new account
router.post('/', (req, res, next) => {
    const { username, password, fullname, role } = req.body;
    AccountModel.create({
        username: username,
        password: password,
        fullname: fullname,
        role: role
    })
        .then(data => {
            res.json({method:'POST',data});
        })
        .catch(err => {
            res.json(err)
        })
})

// update
router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    AccountModel.updateOne({
        _id: id
    }, {
        password: 'newpassword'
    })
        .then(data => {
            res.json({method:'PUT',data});
        })
        .catch(err => {
            res.json(err)
        })
})

//delete
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    AccountModel.deleteOne({
        _id: id
    })
        .then(data => {
            res.json({method:'DELETE',data});
        })
        .catch(err => {
            res.json(err)
        })
})


module.exports = router
