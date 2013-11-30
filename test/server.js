var configs = require('./config.json');
var should = require('should');
var Reiki = require('../lib/index.js');
var request = require('request');
describe('simpleServer', function() {
  'use strict';
  describe('initialization', function() {
    var server;
    var connectionUrl;
    before(function() {
      connectionUrl = 'http://' + configs.host + ':' + configs.port;
      server = require('../mocks/simple-server.js');
      server.listen(configs.port);
    });

    after(function() {
      server.close();
    });


    it('should return hello world', function(done) {
      request(connectionUrl, function(err, response, body) {
        should.exist(body);
        body.should.equal('hello world');
        done();
      });
    });
  });


});
