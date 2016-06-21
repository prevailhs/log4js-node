"use strict";
var consoleLog = console.log.bind(console);

function passthroughAppender() {
  return function(loggingEvent) {
    consoleLog.apply(this, loggingEvent.data);
  };
}

function configure(config) {
  return passthroughAppender();
}

exports.appender = passthroughAppender;
exports.configure = configure;
