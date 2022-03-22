"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProject = exports.saveProject = exports.getProject = exports.getAllProjects = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Project = _interopRequireDefault(require("../models/Project"));

var getAllProjects = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var findedProject;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Project["default"].find({}).exec();

          case 3:
            findedProject = _context.sent;
            res.status(200).json(findedProject);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(400).json(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getAllProjects(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllProjects = getAllProjects;

var getProject = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, savedProject;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _Project["default"].findById(id).exec();

          case 4:
            savedProject = _context2.sent;
            res.status(200).json(savedProject);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.status(400).json(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getProject(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProject = getProject;

var saveProject = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, name, scenes, savedProject;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, name = _req$body.name, scenes = _req$body.scenes;
            _context3.next = 4;
            return _Project["default"].create({
              name: name,
              scenes: scenes
            });

          case 4:
            savedProject = _context3.sent;
            res.status(200).json(savedProject);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(400).json(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function saveProject(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.saveProject = saveProject;

var updateProject = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$params, _req$body2, scenes, name, savedProject;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$body2 = req.body, scenes = _req$body2.scenes, name = _req$body2.name;
            _context4.next = 4;
            return _Project["default"].findByIdAndUpdate((_req$params = req.params) === null || _req$params === void 0 ? void 0 : _req$params.id, {
              scenes: scenes,
              name: name
            });

          case 4:
            savedProject = _context4.sent;
            res.status(200).json(savedProject);
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            res.status(400).json(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function updateProject(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateProject = updateProject;