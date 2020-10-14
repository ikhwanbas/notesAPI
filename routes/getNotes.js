const express = require('express')
const db = require('../controller/dbController')
const app = express.Router()

//handle /notes GET request
app.get('/notes', (req, res) => {
    const result = db.getAll()
    res.send(result)
})

module.exports = app