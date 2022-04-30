const express = require('express');
const router = express.Router();
const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: '123456',
    port: 5432,
})
client.connect(function (err) {
    if (err) throw err;
    console.log("Connected postgress!");
});

router.get('/insert', (req, res) => {
    const text = "INSERT INTO accounts (username, password)VALUES ($1, $2)";
    const values = ['user001', '1234567'];
    client.query(text, values);
    res.end();
})


router.get('/select', (req, res) => {
    client.query('SELECT * FROM public.accounts')
        .then(data => { res.json(data.rows) })

})
module.exports = router;
