"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("./database");

var _app = _interopRequireDefault(require("./app"));

var _process, _process$env;

var PORT = ((_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.PORT) || 3001;

_app["default"].listen(PORT, function () {
  console.log("Server Running:  http://localhost:".concat(PORT, "/"));
});