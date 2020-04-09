"use strict";

var api = require("./api");
var auth = require("./auth");
var memo = require("./auth/memo");
var broadcast = require("./broadcast");
var config = require("./config");
var formatter = require("./formatter")(api);
var utils = require("./utils");

var hivejs = {
  api: api,
  auth: auth,
  memo: memo,
  broadcast: broadcast,
  config: config,
  formatter: formatter,
  utils: utils
};

if (typeof window !== "undefined") {
  window.hivejs = hivejs;
}

if (typeof global !== "undefined") {
  global.hivejs = hivejs;
}

exports = module.exports = hivejs;