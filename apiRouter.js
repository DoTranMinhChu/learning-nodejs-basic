const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.json({ Method: "Router using GET", Headers: req.headers, Body: req.body })
})

router.post('/', (req, res) => {
    res.json({ Method: "Router using POST", headers: req.headers, body: req.body })
})


router.put('/', (req, res) => {
    res.json({ Method: "Router using PUT", headers: req.headers, body: req.body })
})


router.delete('/', (req, res) => {
    res.json({ Method: "Router using DELETE", headers: req.headers, body: req.body })
})


module.exports = {
    router
} 