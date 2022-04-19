const fs = require('fs')
const { generateKeyPairSync } = require('crypto');

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: "aes-256-cbc",
        passphrase: 'MinhChu'

    }
})

fs.writeFileSync('key/public.pem', publicKey);
fs.writeFileSync('key/private.crt', privateKey);


