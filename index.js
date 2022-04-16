const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const port = 3000;
const { routerAccount } = require('./routers/account');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send()
});

app.use("/api/account", routerAccount);
app.listen(port, () => {
    console.log(`Example app http://localhost:${port}/api/account`);
});