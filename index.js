const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;
const { router } = require('./apiRouter');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1><a href='/list-accounts'>List Accounts</a></h1>");
    
    res.write("<h1>Register</h1>");
    res.write("<form action='/register' method='POST'>");
    res.write("<label>Username: </label><input type='text' name='username' required></br>");
    res.write("<label>Password: </label><input type='password' name='password' required></br>");
    res.write("<label>Full name: </label><input type='text' name='fullname'></br>");
    res.write("<label>Role: </label><select name='role' id='role'><option value='0'>User</option><option value='1'>Admin</option></select></br>");
    res.write("<input type='submit' name='action' value='register'></br>");
    res.write("</form>");

    res.write("<h1>Login</h1>");
    res.write("<form action='/login' method='POST'>");
    res.write("<label>Username: </label><input type='text' name='username' required></br>");
    res.write("<label>Password: </label><input type='password' name='password' required></br>");
    res.write("<input type='submit' name='action' value='login'></br>");
    res.write("</form>");

    res.send();
});

app.use("/", router);
app.listen(port, () => {
    console.log(`Example app http://localhost:${port}/`);
});