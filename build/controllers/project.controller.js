"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveItem = void 0;

var saveItem = function saveItem(req, res) {
  res.status(200).json(req.body);
};

exports.saveItem = saveItem;