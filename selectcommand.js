var mysql = require('mysql');
var express = require('express');
var fs = require('fs');
var http = require('http');


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

var select = "select* from cust where custid = 1;";

function onRequest(request,response) {
		var selectquer = connection.query(select,function(err,rows,fields) {
		if(err)
			console.log(err.stack);
		else{
			console.log(JSON.stringify(rows,null,2));
			response.writeHead(200,{"Context-type":"application/json"});
			response.write(JSON.stringify(rows,null,2));
			response.end();
		}
	});	
}

http.createServer(onRequest).listen(8888);
console.log("createdServer");
