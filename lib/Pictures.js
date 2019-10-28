"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Pictures = function Pictures(props) {
  var pictureRenderer = function pictureRenderer(index, picture, _onClick) {
    var title = "title-".concat(index);
    var main = "main-".concat(index);
    var timestamp = "timestamp-".concat(index);
    return _react["default"].createElement("span", {
      style: _objectSpread({
        margin: props.pictureMargin
      }, _styles.mainStyle),
      onMouseEnter: function onMouseEnter() {
        document.getElementById(main).style.cursor = "pointer";
        document.getElementById(title).style.opacity = 1;
      },
      onMouseLeave: function onMouseLeave() {
        document.getElementById(main).style.cursor = null;
        document.getElementById(title).style.opacity = 0;
      },
      id: "main-".concat(index),
      key: "main-".concat(index),
      onClick: function onClick() {
        return _onClick(picture);
      }
    }, _react["default"].createElement("img", _extends({
      height: picture.height || '150px',
      width: picture.width || '150px',
      margin: picture.margin || 0,
      alt: picture.alt
    }, picture)), _react["default"].createElement("span", {
      id: title,
      style: _objectSpread({}, _styles.titleStyle)
    }, picture.title), _react["default"].createElement("span", {
      id: timestamp,
      style: _objectSpread({}, _styles.timestampStyle)
    }, picture.timestamp));
  };

  var spacers = props.activePagePictures.map(function (picture, index) {
    return _react["default"].createElement("span", {
      key: "spacer-".concat(index),
      style: {
        width: picture.width || '150px',
        margin: props.pictureMargin || 0
      }
    });
  });
  var pictures = props.activePagePictures.map(function (picture, index) {
    return pictureRenderer(index, picture, props.onClick);
  }).concat(spacers);
  return _react["default"].createElement("div", {
    style: _styles.picturesContainerStyle
  }, _react["default"].createElement("div", {
    style: _styles.pictureStyle
  }, pictures));
};

var _default = Pictures;
exports["default"] = _default;