"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LoadingModule = _interopRequireDefault(require("./Loading.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Loading = _ref => {
  let {
    active = true
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: active ? _LoadingModule.default.loading : _LoadingModule.default.none
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _LoadingModule.default.uil_ring_css,
    style: {
      transform: 'scale(0.79)'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null)));
};

var _default = Loading;
exports.default = _default;