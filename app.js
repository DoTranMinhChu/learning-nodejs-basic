const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const port = 3000;
const routerAccount = require('./routers/account.router');
const routerProduct = require('./routers/product.router');
const routerLogin = require('./routers/login.router');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use("/api/account", routerAccount);
app.use("/api/product", routerProduct);
app.use("/login",routerLogin);

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home/index.html'))
});



app.listen(port, () => {
    console.log(`Example app http://localhost:${port}/home`);
    console.log(`Example app http://localhost:${port}/login`);

});