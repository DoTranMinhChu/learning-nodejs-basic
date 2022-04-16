const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const port = 3000;
const { router } = require('./apiRouter');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>TEST GET</h1>");
    res.write('<a href="/api?username=admin&pass=123456">/api?username=admin&pass=123456</a></br>');

    res.write("<h1>TEST POST</h1>");
    res.write("<form action='/api' method='POST'>");
    res.write("<label>Username: </label><input type='text' name='username'></br>");
    res.write("<label>Pass: </label><input type='text' name='pass'></br>");
    res.write("<input type='submit' name='submit' value='submit POST'></br>");
    res.write("</form>");

    res.write("<h1>TEST PUT</h1>");
    res.write("<form action='/api' method='PUT'>");
    res.write("<label>Username: </label><input type='text' name='username'></br>");
    res.write("<label>Pass: </label><input type='text' name='pass'></br>");
    res.write("<input type='submit' name='submit' value='submit PUT'></br>");
    res.write("</form>");

    res.write("<h1>TEST DELETE</h1>");
    res.write("<form action='/api' method='DELETE'>");
    res.write("<label>Username: </label><input type='text' name='username'></br>");
    res.write("<label>Pass: </label><input type='text' name='pass'></br>");
    res.write("<input type='submit' name='submit' value='submit DELETE'></br>");
    res.write("</form>");

    res.send();
});

app.use("/api", router);
app.listen(port, () => {
    console.log(`Example app http://localhost:${port}/`);
});