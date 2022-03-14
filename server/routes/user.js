const express = require("express")
const router = express.Router()
const User = require('../schemas/user')
require('dotenv').config()
const getDate = require('../utils/date')
const bcrypt = require('bcryptjs');

router.post('/sign-up', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const repeatedPassword = req.body.repeatedPassword

    const user = await User.findOne({ username: username })

    if (!user) {
        if (password === repeatedPassword) {
            const hashedPassword = await bcrypt.hash(password, 10)
            try {
                const user = await User.create({
                    username: username,
                    password: hashedPassword,
                    dateCreated: getDate()
                })
                if (user) {
                    res.json({ success: true, message: 'Account created!' })
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            res.json({ success: false, message: 'Passwords do not match.' })
        }
    } else {
        res.json({ success: false, message: 'That username is already taken.' })
    }
})





module.exports = router
