const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;


const app = express();

//body parser
//to acceptuser input to make image from req.body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// set static folder
//applying middleware
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () => console.log(` Server is on port ${port}`));