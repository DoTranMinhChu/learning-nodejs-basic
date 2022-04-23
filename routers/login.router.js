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
}
));

passport.serializeUser(function (user, done) {
    done(null, user);
});


router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/login/index.html'));
})



router.post('/', (req, res, next) => {

    passport.authenticate('local', (err, user, info) => {

        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }

        const userID = { _id: user.toObject()._id };

        req.logIn(userID, (err) => {  // call passport.serializeUser
            console.log("serializeUser : ", req.session.passport.user)

            if (err) { return next(err); }
            const privateKey = fs.readFileSync('./key/private.crt');
            const token = jwt.sign(
                userID,
                {
                    key: privateKey,
                    passphrase: 'MinhChu'
                },
                {
                    algorithm: 'RS256'
                }
            );

            return res.json({ token })
        })
    })(req, res, next);

});


module.exports = router;