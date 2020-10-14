const express = require('express')
const db = require('../controller/dbController')
const app = express.Router()

//handle /Notes POST Request
app.post('/notes', (req, res) => {
    const body = req.body
    const id = req.body.id
    const isIdAvailable = db.get(id)

    if (isIdAvailable) {
        res.status(409).send('This ID has been registered.')
    } else {
        db.add(body)
        res.send(body)
    }
})

module.exports = app