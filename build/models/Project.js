"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Project = (0, _mongoose.model)('Project', new _mongoose.Schema({
  name: String,
  scenes: [{
    id: String,
    name: String,
    imgUrl: String,
    initialViewParameters: {
      yaw: Number,
      pitch: Number,
      fov: Number
    },
    linkHotspots: [{
      yaw: Number,
      pitch: Number,
      rotation: Number,
      target: String
    }],
    infoHotspots: [{
      yaw: Number,
      pitch: Number,
      title: String,
      text: String
    }]
  }]
}, {
  timestamps: true,
  versionKey: false
}));
var _default = Project;
exports["default"] = _default;