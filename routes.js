var command = require('./commands');

module.exports = {
	configure: function(app) {
		app.post('/commands/',function(req,res) {
			console.log(req.body.mob);
			command.insertd(req.body.id,req.body.name,req.body.mob,res);
		});

		app.post('/update/',function(req,res) {
			console.log(req.body.name);
			command.updated(req.body.id,req.body.name,res);
		});

		app.post('/delete/',function(req,res) {
			console.log(req.body.id);
			command.deleted(req.body.id,res);
		});
	}
}