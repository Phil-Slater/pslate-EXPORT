const express = require("express")
const router = express.Router()
const User = require('../schemas/user')
require('dotenv').config()
const getDate = require('../utils/date')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

router.post('/sign-in', async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = await User.findOne({ username: username })

    if (user) {
        try {
            const match = await bcrypt.compare(password, user.password)
            if (match) {
                const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY)
                res.send({ success: true, message: 'You are signed in!', username: user.username, token: token })
            } else {
                res.json({ success: false, message: 'Username or password is incorrect.' })
            }
        } catch (error) {
            res.json({ success: false, message: 'Server error. Please try again.' })
        }
    } else {
        res.json({ success: false, message: 'Username or password is incorrect.' })
    }
})

router.post('/guest', async (req, res) => {
    const username = 'Guest'
    const password = 'guestpw'

    const user = await User.findOne({ username: username })

    if (user) {
        try {
            const match = await bcrypt.compare(password, user.password)
            if (match) {
                const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY)
                res.send({ success: true, message: 'You are signed in!', username: user.username, token: token })
            } else {
                res.json({ success: false, message: 'Username or password is incorrect.' })
            }
        } catch (error) {
            res.json({ success: false, message: 'Server error. Please try again.' })
        }
    } else {
        res.json({ success: false, message: 'Username or password is incorrect.' })
    }
})




module.exports = router
