"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _project = require("../controllers/project.controller");

var router = (0, _express.Router)();
var END_POINT = '/project';
router.get("".concat(END_POINT), _project.getAllProjects);
router.get("".concat(END_POINT, "/:id"), _project.getProject);
router.post("".concat(END_POINT), _project.saveProject);
router.put("".concat(END_POINT, "/:id"), _project.updateProject);
var _default = router;
exports["default"] = _default;