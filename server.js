require('dotenv').config();
const
    express = require('express'),
    app = express(),
    port = process.env.port,
    mongoose = require('mongoose'),
    logger = require('morgan');

// database connection
mongoose.connect('mongodb://admin:admin1@ds145304.mlab.com:45304/project_1_sc');

// routes
app.get('/', (req, res) => {
    res.send("Hello World Yayyy!!");
});


app.listen(port, err => {
    console.log(err || `Server connected to port: ${port}`);
});