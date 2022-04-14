const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<a href="/api/v1/about">/api/v1/about</a> </br>')
    res.write('<a href="/api/v1/cart">/api/v1/cart</a></br>')
    res.write('<a href="/api/v1/cart/abcxyz">/api/v1/cart/abcxyz</a></br>')
    res.write('<a href="/api/v1/cart/a1b2c3">/api/v1/cart/a1b2c3</a></br>')
    res.write('<a href="/api/v1/">/api/v1/</a></br>')
    res.write(`</br>Time: ${Date.now()} </br>`);
    next();
})


router.get('/about', (req, res) => {
    res.write('This is "About" page</br>');
    res.send();
})

router.get('/cart', (req, res) => {
    res.write('Welcome</br>');
    res.write('This is "cart" page');
    res.send();
})
router.get('/cart/:id', (req, res) => {
    res.write(`This is "cart" page , with parameter id : ${req.params.id}`)
    res.send();
})


router.get('/', (req, res) => {
    res.write('This is "Home" page')
    res.send();
})


module.exports = {
    router
} 