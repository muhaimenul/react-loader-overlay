Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Loading-module_none__XBIez {\n  display: none !important;\n}\n\ndiv.Loading-module_loading__Ydf3s{\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(16, 16, 16, 0.5);\n  /* z-index: 999; */\n}\n\n@-webkit-keyframes Loading-module_uil-ring-anim__54lEh {\n  0% {\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -webkit-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n  }\n  100% {\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes Loading-module_uil-ring-anim__54lEh {\n  0% {\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -webkit-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n  }\n  100% {\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n  }\n}\n@-moz-keyframes Loading-module_uil-ring-anim__54lEh {\n  0% {\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -webkit-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n  }\n  100% {\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n  }\n}\n@-ms-keyframes Loading-module_uil-ring-anim__54lEh {\n  0% {\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -webkit-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n  }\n  100% {\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n  }\n}\n@-moz-keyframes Loading-module_uil-ring-anim__54lEh {\n  0% {\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -webkit-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n  }\n  100% {\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes Loading-module_uil-ring-anim__54lEh {\n  0% {\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -webkit-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n  }\n  100% {\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n  }\n}\n@-o-keyframes Loading-module_uil-ring-anim__54lEh {\n  0% {\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -webkit-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n  }\n  100% {\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n  }\n}\n@keyframes Loading-module_uil-ring-anim__54lEh {\n  0% {\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -webkit-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n  }\n  100% {\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n  }\n}\n.Loading-module_uil_ring_css__Phk03 {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 200px;\n  height: 200px;\n}\n.Loading-module_uil_ring_css__Phk03 > div {\n  position: absolute;\n  display: block;\n  width: 160px;\n  height: 160px;\n  top: 20px;\n  left: 20px;\n  border-radius: 80px;\n  box-shadow: 0 6px 0 0 #ffffff;\n  -ms-animation: Loading-module_uil-ring-anim__54lEh 1s linear infinite;\n  -moz-animation: Loading-module_uil-ring-anim__54lEh 1s linear infinite;\n  -webkit-animation: Loading-module_uil-ring-anim__54lEh 1s linear infinite;\n  -o-animation: Loading-module_uil-ring-anim__54lEh 1s linear infinite;\n  animation: Loading-module_uil-ring-anim__54lEh 1s linear infinite;\n}\n";
var styles = {"none":"Loading-module_none__XBIez","loading":"Loading-module_loading__Ydf3s","uil_ring_css":"Loading-module_uil_ring_css__Phk03","uil-ring-anim":"Loading-module_uil-ring-anim__54lEh"};
styleInject(css_248z);

var Loader = function Loader(_ref) {
  var _ref$active = _ref.active,
      active = _ref$active === void 0 ? true : _ref$active;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: active ? styles.loading : styles.none
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.uil_ring_css,
    style: {
      transform: 'scale(0.79)'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", null)));
};

exports.Loader = Loader;
//# sourceMappingURL=index.js.map
