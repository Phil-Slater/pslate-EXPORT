const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: String,
    password: String,
    dateCreated: String,
    dateUpdated: String

})

const User = mongoose.model('User', userSchema)

module.exports = User
