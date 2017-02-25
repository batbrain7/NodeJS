var command = require('./commands');

module.exports = {
	configure: function(app) {
		app.post('/commands/',function(req,res) {
			console.log(req.body.mob);
			command.insertd(req.body.id,req.body.name,
				req.body.mob,res);
		});
	}
}