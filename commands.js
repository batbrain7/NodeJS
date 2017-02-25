var mysql = require('mysql');

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


function insertdata(id,name,mob,res) {
	connection.query("insert into cust (custid,custname,custmobile) values ("+id+",'"+name+"',"+mob+");",function(err,result) {
		if(err) {
			console.log(err.stack);
			return;
		} else {
			console.log(result);
		}	
	});
};

module.exports.insertd = insertdata;