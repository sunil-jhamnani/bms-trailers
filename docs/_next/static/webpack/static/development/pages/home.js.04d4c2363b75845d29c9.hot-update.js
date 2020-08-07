webpackHotUpdate("static/development/pages/home.js",{

/***/ "./modules/layout/components/Header.js":
/*!*********************************************!*\
  !*** ./modules/layout/components/Header.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/header.scss */ \"./modules/layout/styles/header.scss\");\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_header_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _dropdown_components_Dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../dropdown/components/Dropdown */ \"./modules/dropdown/components/Dropdown.js\");\n/* harmony import */ var _assets_images_icons_logo_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/images/icons/logo.jpeg */ \"./assets/images/icons/logo.jpeg\");\n/* harmony import */ var _assets_images_icons_logo_jpeg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_images_icons_logo_jpeg__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../_data */ \"./_data/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/suniljhamnani/Github projects/bms-trailers/modules/layout/components/Header.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) {\n  var hasNativeReflectConstruct = _isNativeReflectConstruct();\n\n  return function _createSuperInternal() {\n    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived),\n        result;\n\n    if (hasNativeReflectConstruct) {\n      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor;\n\n      result = Reflect.construct(Super, arguments, NewTarget);\n    } else {\n      result = Super.apply(this, arguments);\n    }\n\n    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result);\n  };\n}\n\nfunction _isNativeReflectConstruct() {\n  if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n  if (Reflect.construct.sham) return false;\n  if (typeof Proxy === \"function\") return true;\n\n  try {\n    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\n\n\n\n\n\n\n\n\nvar Header = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Header, _React$Component);\n\n  var _super = _createSuper(Header);\n\n  function Header() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Header);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      isLoggedIn: false\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Header, [{\n    key: \"render\",\n    value: function render() {\n      var movieData = this.props.movieData;\n      return __jsx(\"nav\", {\n        className: \"page-header navbar\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: \"page-header__logo-container col d-flex align-items-center\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 9\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        href: \"/home\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        className: \"page-header__logo\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 13\n        }\n      }, __jsx(\"img\", {\n        src: _assets_images_icons_logo_jpeg__WEBPACK_IMPORTED_MODULE_13___default.a,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 15\n        }\n      }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        href: \"\",\n        className: \"btn btn-primary page-header__cta\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }\n      }, \"COMMING SOON\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        href: \"\",\n        className: \"btn btn-dark page-header__cta\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }\n      }, \"NOW SHOWING\"))), __jsx(\"div\", {\n        className: \"page-header__links col d-flex justify-content-end\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }\n      }, __jsx(_dropdown_components_Dropdown__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        className: \"dd-languages\",\n        title: \"Popular\",\n        type: \"popular\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }\n      }), __jsx(_dropdown_components_Dropdown__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        title: \"All Languages\",\n        data: movieData.languages,\n        type: \"EventLanguage\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }\n      }), __jsx(_dropdown_components_Dropdown__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        title: \"All Genres\",\n        data: _data__WEBPACK_IMPORTED_MODULE_14__[\"EVENT_GENRE\"],\n        type: \"EventGenre\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }\n      })));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    movieData: state.movieData\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"connect\"])(mapStateToProps, null)(Header));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xheW91dC9jb21wb25lbnRzL0hlYWRlci5qcz9lM2UwIl0sIm5hbWVzIjpbIkhlYWRlciIsImlzTG9nZ2VkSW4iLCJtb3ZpZURhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxNOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGdCQUFVLEVBQUU7QUFETixLOzs7Ozs7OzZCQUlFO0FBQUEsVUFDQUMsU0FEQSxHQUNjLEtBRGQsS0FDYyxDQURkO0FBR1IsYUFDRTtBQUFLLGlCQUFTLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBTSxZQUFJLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxXQUFHLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREYsQ0FERixFQU1FO0FBQU0sWUFBSSxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLFlBQUksRUFBUDtBQUFXLGlCQUFTLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FQSixjQU9JLENBREYsQ0FORixFQVNFO0FBQU0sWUFBSSxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLFlBQUksRUFBUDtBQUFXLGlCQUFTLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FYTixhQVdNLENBREYsQ0FURixDQURGLEVBY0U7QUFBSyxpQkFBUyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFVLGlCQUFTLEVBQW5CO0FBQW1DLGFBQUssRUFBeEM7QUFBbUQsWUFBSSxFQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRTtBQUFVLGFBQUssRUFBZjtBQUFnQyxZQUFJLEVBQUVBLFNBQVMsQ0FBL0M7QUFBMkQsWUFBSSxFQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsRUFHRTtBQUFVLGFBQUssRUFBZjtBQUE2QixZQUFJLEVBQWpDO0FBQWdELFlBQUksRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhGLENBZEYsQ0FERjtBQXVCRDs7OztFQS9Ca0JDLDRDQUFLLENBQUNDLFM7O0FBa0MzQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQUs7QUFBQSxTQUFLO0FBQ2hDSCxhQUFTLEVBQUVJLEtBQUssQ0FBQ0o7QUFEZSxHQUFMO0FBQTdCOztBQUllSywwSEFBTyxrQkFBUEEsSUFBTyxDQUFQQSxDQUFmLE1BQWVBLENBQWYiLCJmaWxlIjoiLi9tb2R1bGVzL2xheW91dC9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICcuLi9zdHlsZXMvaGVhZGVyLnNjc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi4vLi4vZHJvcGRvd24vY29tcG9uZW50cy9Ecm9wZG93bic7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL2xvZ28uanBlZydcbmltcG9ydCB7RVZFTlRfR0VOUkV9IGZyb20gJy4uLy4uLy4uL19kYXRhJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaXNMb2dnZWRJbjogZmFsc2VcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBtb3ZpZURhdGEgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlciBuYXZiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlcl9fbG9nby1jb250YWluZXIgY29sIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWVcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyX19sb2dvXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfT48L2ltZz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgcGFnZS1oZWFkZXJfX2N0YVwiPkNPTU1JTkcgU09PTjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgcGFnZS1oZWFkZXJfX2N0YVwiPk5PVyBTSE9XSU5HPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJfX2xpbmtzIGNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgIDxEcm9wZG93biBjbGFzc05hbWU9J2RkLWxhbmd1YWdlcycgdGl0bGU9XCJQb3B1bGFyXCIgdHlwZT1cInBvcHVsYXJcIiAvPlxuICAgICAgICAgIDxEcm9wZG93biB0aXRsZT1cIkFsbCBMYW5ndWFnZXNcIiBkYXRhPXttb3ZpZURhdGEubGFuZ3VhZ2VzfSB0eXBlPVwiRXZlbnRMYW5ndWFnZVwiIC8+XG4gICAgICAgICAgPERyb3Bkb3duIHRpdGxlPVwiQWxsIEdlbnJlc1wiIGRhdGE9e0VWRU5UX0dFTlJFfSB0eXBlPVwiRXZlbnRHZW5yZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Lyo8Tm90aWZpY2F0aW9uQ29udGFpbmVyIG1lc3NhZ2U9e25vdGlmaWNhdGlvbi5tZXNzYWdlfSB0eXBlPXtub3RpZmljYXRpb24udHlwZX0vPiovfVxuICAgICAgPC9uYXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIG1vdmllRGF0YTogc3RhdGUubW92aWVEYXRhXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKEhlYWRlcik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/layout/components/Header.js\n");

/***/ })

})