"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _project = require("../controllers/project.controller");

var router = (0, _express.Router)();
var END_POINT = '/project';
router.post("".concat(END_POINT), _project.saveItem);
var _default = router;
exports["default"] = _default;