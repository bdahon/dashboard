webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
var _jsxFileName = "/Users/Theoofe/Living-Data/covid19-dashboard/components/menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Menu = function Menu(_ref) {
  var selectedView = _ref.selectedView,
      selectView = _ref.selectView,
      children = _ref.children;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4167748125", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + 'menu-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4167748125", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4167748125", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + 'view-selector',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return selectView('description');
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4167748125", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + "".concat(selectedView === 'description' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["FileText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      return selectView('map');
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4167748125", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + "".concat(selectedView === 'map' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["Map"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      return selectView('stats');
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4167748125", [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay]]]) + " " + "".concat(selectedView === 'stats' ? 'selected' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["BarChart"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4167748125",
    dynamic: [selectedView === 'map' ? 0 : '1em', _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay],
    __self: this
  }, ".menu-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;background-color:#fff;}.menu-container.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:scroll;padding:".concat(selectedView === 'map' ? 0 : '1em', ";}.view-selector.__jsx-style-dynamic-selector{display:none;}.view-selector.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{padding:1em;margin:auto;}.view-selector.__jsx-style-dynamic-selector>div.selected.__jsx-style-dynamic-selector{border-top:2px solid ").concat(_styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue, ";}@media (max-width:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].mobileDisplay, "){.menu-footer.__jsx-style-dynamic-selector{padding:0.5em 1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UaGVvb2ZlL0xpdmluZy1EYXRhL2NvdmlkMTktZGFzaGJvYXJkL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmtCLEFBR3dCLEFBUU4sQUFNTSxBQUlELEFBS3NDLEFBSzlCLFlBVFIsQ0FKZCxLQWNFLE1BVEYsU0FYb0IsaUJBZXBCLENBZHVDLHVCQVRmLGNBVXhCLGdFQVRjLFlBQ0QsV0FDVyxzQkFDeEIiLCJmaWxlIjoiL1VzZXJzL1RoZW9vZmUvTGl2aW5nLURhdGEvY292aWQxOS1kYXNoYm9hcmQvY29tcG9uZW50cy9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHtGaWxlVGV4dCwgTWFwLCBCYXJDaGFydH0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcblxuY29uc3QgTWVudSA9ICh7c2VsZWN0ZWRWaWV3LCBzZWxlY3RWaWV3LCBjaGlsZHJlbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudS1jb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ZpZXctc2VsZWN0b3InPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c2VsZWN0ZWRWaWV3ID09PSAnZGVzY3JpcHRpb24nID8gJ3NlbGVjdGVkJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHNlbGVjdFZpZXcoJ2Rlc2NyaXB0aW9uJyl9PlxuICAgICAgICAgIDxGaWxlVGV4dCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVmlldyA9PT0gJ21hcCcgPyAnc2VsZWN0ZWQnIDogJyd9YH0gb25DbGljaz17KCkgPT4gc2VsZWN0VmlldygnbWFwJyl9PlxuICAgICAgICAgIDxNYXAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFZpZXcgPT09ICdzdGF0cycgPyAnc2VsZWN0ZWQnIDogJyd9YH0gb25DbGljaz17KCkgPT4gc2VsZWN0Vmlldygnc3RhdHMnKX0+XG4gICAgICAgICAgPEJhckNoYXJ0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1jb250YWluZXIgLmNvbnRlbnQge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgIHBhZGRpbmc6ICR7c2VsZWN0ZWRWaWV3ID09PSAnbWFwJyA/IDAgOiAnMWVtJ307XG4gICAgICAgIH1cblxuICAgICAgICAudmlldy1zZWxlY3RvciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52aWV3LXNlbGVjdG9yID4gZGl2IHtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZpZXctc2VsZWN0b3IgPiBkaXYuc2VsZWN0ZWQge1xuICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAke2NvbG9ycy5ibHVlfTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLm1vYmlsZURpc3BsYXl9KSB7XG4gICAgICAgICAgLm1lbnUtZm9vdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlbGVjdGVkVmlldzogbnVsbCxcbiAgc2VsZWN0VmlldzogbnVsbFxufVxuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgc2VsZWN0ZWRWaWV3OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdkZXNjcmlwdGlvbicsICdtYXAnLCAnc3RhdHMnXG4gIF0pLFxuICBzZWxlY3RWaWV3OiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVxuIl19 */\n/*@ sourceURL=/Users/Theoofe/Living-Data/covid19-dashboard/components/menu.js */")));
};

Menu.defaultProps = {
  selectedView: null,
  selectView: null
};
Menu.propTypes = {
  selectedView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['description', 'map', 'stats']),
  selectView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.2e9bbf0f56553cf395f4.hot-update.js.map