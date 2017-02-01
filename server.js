var server = require('./config/express');
var config = require('./config/config');

server.get('/', function(req, res) {
	res.send('Hi');
});

server.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

