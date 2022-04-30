const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var passport = require('passport');
const session = require('express-session')


const port = process.env.PORT || 3000;
const routerAccount = require('./routers/account.router');
const routerProduct = require('./routers/product.router');
const routerLogin = require('./routers/login.router');
const routerPersonal = require('./routers/personal.router')
const routerPostgresql = require('./routers/postgresql.router')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }));
app.use(passport.initialize());
app.use(passport.session())

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use("/api/account", routerAccount);
app.use("/api/product", routerProduct);
app.use("/login", routerLogin);
app.use("/personal", routerPersonal);
app.use("/postgresql", routerPostgresql);

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home/index.html'))
});


app.listen(port, () => {
    console.log(`Example app http://localhost:${port}/home`);
    console.log(`Example app http://localhost:${port}/login`);
    console.log(`Example app http://localhost:${port}/postgresql/select`);
    console.log(`Example app http://localhost:${port}/postgresql/insert`);
});