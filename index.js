var db = require('./public/server/db.js');
var server = require('./public/server/server');
var port = process.env.PORT || 1337;

server.listen(port, function () {
  console.log('Listening to port %d', port);
});