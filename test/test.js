var mongodb = require('mongodb');
var mongoDebug = require('../lib/index');
var MongoClient = require('mongodb').MongoClient;

describe('mongo-datadog-stats', function() {
  var db;

  before(function(done) {
    db = null;

    mongoDebug.install(mongodb, {
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
