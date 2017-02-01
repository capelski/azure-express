var express = require('express');
var server = express();

var config = require('./config/config');

// module.exports = require('./config/express')(app, config);

server.get('/', function(req, res) {
	res.send('Hi');
});

server.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

