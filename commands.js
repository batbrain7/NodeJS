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

function selectdata(res,name) {
	connection.query("select* from cust where custname = '"+name + "';",function(err,result) {
		if(err) {
			console.log(err.stack);
		} else {
			console.log(result);
			res.send(result);
		}
	});
};

function insertdata(id,name,mob,res) {
	connection.query("insert into cust (custid,custname,custmobile) values (" + id + ",'" + name + "'," + mob + ");",function(err,result) {
		if(err) {
			console.log(err.stack);
		} else {
			console.log(result);
		}	
	});
};

function updatedata(id,name,res) {
	connection.query("update cust set custname = '" + name + "' where custid = " + id +";",function(err,result) {
		if(err) {
			console.log(err.stack);
		} else {
			console.log(result);
		}
	});
}

function deletequery(id,res) {
	connection.query("delete from cust where custid = " + id + ";" ,function (err,result) {
		if(err) {
			console.log(err.stack);
		} else {
			console.log(result);
		}
	});
}

module.exports.insertd = insertdata;
module.exports.deleted = deletequery;
module.exports.updated = updatedata;
module.exports.selectd = selectdata;

