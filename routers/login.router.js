const express = require('express');
const path = require('path');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs')
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

const AccountModel = require('../models/account.model');


passport.use(new LocalStrategy((username, password, done) => {
    AccountModel.findOne({ username: username, password: password }, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
    });
}));

passport.serializeUser(function (user, done) { // save user object to req.user
    done(null, user);
});

passport.deserializeUser(function (user, done) {  // get req.user with value is user object
    done(null, user);
});



router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/login/index.html'));
})



router.post('/', (req, res, next) => {

    passport.authenticate('local', (err, user, info) => {

        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }

        user = user.toObject();

        req.logIn(user, (err) => {  // call passport.serializeUser
            if (err) {
                return next(err);
            }
            return res.json(user);
        })
    })(req, res, next);

});


module.exports = router;