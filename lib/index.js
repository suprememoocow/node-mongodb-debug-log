'use strict';

var wrapper = require('mongodb-perf-wrapper');

function install(mongodb, options) {
  if (!options) options = {};

  var debugName = options.debugName || 'mongodb-query';
  var slowLogTimeMicros = (options.slowLogMS || 100) * 1000;

  var debug = require('debug')(debugName);
  var debugSlowlog = require('debug')(debugName + ":slowlog");

  if (!debug.enabled && !debugSlowlog.enabled) return;

  wrapper.wrap(mongodb, function(collection, operation, timeMicroSeconds, query/*, responseErr*/) {
    var logger = timeMicroSeconds > slowLogTimeMicros ? debugSlowlog : debug;
    logger("%s %s took %sµs: %j", collection, operation, timeMicroSeconds, query);
  });

}

module.exports = {
  install: install
};
