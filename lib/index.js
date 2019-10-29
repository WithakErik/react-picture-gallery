"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PictureGallery;

var _react = _interopRequireDefault(require("react"));

var _Gallery = _interopRequireDefault(require("./Gallery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function PictureGallery(props) {
  return _react["default"].createElement(_Gallery["default"], props);
}