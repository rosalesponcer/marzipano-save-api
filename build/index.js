"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _project = _interopRequireDefault(require("./routers/project.routes"));

var _process, _process$env;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_project["default"]);
var PORT = ((_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.PORT) || 3001;
app.listen(PORT, function () {
  console.log("Server Running:  http://localhost:".concat(PORT, "/"));
});