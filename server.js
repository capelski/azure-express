var server = require('./config/express');
var config = require('./config/config');

server.get('/', function(req, res) {
	res.send('<div style="padding-top: 25%;"><center><h1>Under construction</h1></center><div>');
});

server.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

