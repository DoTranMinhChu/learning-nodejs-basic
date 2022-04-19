const jwt = require('jsonwebtoken');
const fs = require('fs')


const privateKey = fs.readFileSync('private.crt');
const token = jwt.sign(
    {
        name: 'Do Tran Minh Chu',
        old: '21'
    },
    {
        key: privateKey,
        passphrase: 'MinhChu'
    },
    {
        algorithm: 'RS256'
    }
);


const publicKey = fs.readFileSync('public.pem');
jwt.verify(token, publicKey, { algorithms: 'RS256' }, (err, decoded) => {
    console.log(err ? err : decoded)

});


