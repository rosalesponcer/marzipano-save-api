"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

_mongoose["default"].connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log('MongoDB Connected');
})["catch"](function (error) {
  return console.log('MongoDB', error);
});