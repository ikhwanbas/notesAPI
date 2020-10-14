//install express, low db dan body parser
const express = require('express');
var bodyParser = require('body-parser');

const addNotes = require('./routes/addNotes')
const editNotes = require('./routes/editNotes')
const deleteNotes = require('./routes/deleteNotes')
const getNotes = require('./routes/getNotes')

const app = express();

app.use(bodyParser.json());
app.use(addNotes)
app.use(editNotes)
app.use(deleteNotes)
app.use(getNotes)

//handle GET request for root route 
app.get('/', function (req, res) {
  res.send('Hello World ini adalah root')
});

//port
app.listen(4000);