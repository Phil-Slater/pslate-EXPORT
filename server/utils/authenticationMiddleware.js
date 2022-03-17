
const jwt = require('jsonwebtoken')
const User = require('../schemas/user')
require('dotenv').config()

const authenticate = async (req, res, next) => {

    const headers = req.headers.authorization

    if (headers) {
        const token = headers.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, decoded) => {
            if (error) {
                console.log('auth failed 1')
                res.json({ success: false, message: 'Unable to authenticate! 1' })
            } else {
                const username = decoded.username
                const user = await User.findOne({ username: username })
                if (user) {
                    next()
                } else {
                    console.log('auth failed 2')
                    res.json({ success: false, message: 'Unable to authenticate! 2' })
                }

            }
        })
    } else {
        console.log('auth failed 3')
        res.json({ success: false, message: 'Unable to authenticate! 3' })
    }
}

module.exports = authenticate
