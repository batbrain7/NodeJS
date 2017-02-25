var express = require('express');
var mysql = require('mysql');
var app = express();
var route = require('./routes');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
var router = express.Router();

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mohit983',
    database:'dbmslab'
});

connection.connect(function(err) {
    if(err)
        console.log("Error connecting database" + err.stack);
    else
        console.log("Connected");
});

route.configure(app);

var server = app.listen(3000, function() {
    console.log('Server listening on port' + server.address().port);
});

