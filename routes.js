var command = require('./commands');

module.exports = {
	configure: function(app) {
		app.post('/commands/',function(req,res) {
			console.log(req.body.mob);
			res.send(req.body);
			command.insertd(req.body.id,req.body.name,req.body.mob,res);
		});

		app.post('/update/',function(req,res) {
			console.log(req.body.name);
			res.send(body);
			command.updated(req.body.id,req.body.name,res);
		});

		app.post('/delete/',function(req,res) {
			console.log(req.body.id);
			res.send(body);
			command.deleted(req.body.id,res);
		});

		app.post('/select/',function(req,res) {
			console.log(req.body.name);
			//res.send(req.body);
			command.selectd(res,req.body.name);
		});
	}
}