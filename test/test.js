var mongodb = require('mongodb');
var mongoDogStats = require('../lib/index');
var MongoClient = require('mongodb').MongoClient;
var StatsD = require('node-statsd');

describe('mongo-datadog-stats', function() {
  var db, client;

  before(function(done) {
    db = null;
    client = new StatsD({ mock: true });

    mongoDogStats.install(mongodb, {
      debugName: 'mongo',
      slowLogMS: 10
    });

    MongoClient.connect('mongodb://localhost:27017/test', function(err, returnedDb) {
      if (err) return done(err);
      db = returnedDb;
      done();
    });

  });

  it('should generate stats', function(done) {

    db.collection('t').insert({ a: 1, b: 2}, function(err) {
      if (err) return done(err);

      db.collection('t').findOne({}, done);
    });
  });



});
