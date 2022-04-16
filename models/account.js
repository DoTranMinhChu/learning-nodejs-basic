const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/my_database')
const { Schema } = mongoose

const AccountSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: String,
    role: {
        type: Number,
        required: true
    }
},{
    
    collection: 'Accounts',
    versionKey: false
})

const AccountModel = mongoose.model('account',AccountSchema)

module.exports = AccountModel;