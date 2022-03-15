
const jwt = require('jsonwebtoken')
const User = require('../schemas/user')
require('dotenv').config()

const authenticate = async (req, res, next) => {

    const headers = req.headers.authorization
    console.log(headers)
    if (headers) {
        const token = headers.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, decoded) => {
            if (error) {
                res.json({ success: false, message: 'Unable to authenticate!' })
            } else {
                const username = decoded.username
                const user = await User.findOne({ username: username })
                if (user) {
                    next()
                } else {
                    res.json({ success: false, message: 'Unable to authenticate!' })
                }

            }
        })
    } else {
        console.log('auth failed')
        res.json({ success: false, message: 'Unable to authenticate!' })
    }
}

module.exports = authenticate
