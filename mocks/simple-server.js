//jslint indent:2
var http = require('http');
module.exports = http.createServer(function(req, res) {
  'use strict';
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('hello world');
  res.end('');
});
