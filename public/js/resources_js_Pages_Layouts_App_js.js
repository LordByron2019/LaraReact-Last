(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Layouts_App_js"],{

/***/ "./resources/js/Pages/Layouts/App.js":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Layouts/App.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");




function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    document.title = title;
  }, [title]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
    className: "h-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
      className: "w-full text-center font-bold text-2xl text-white bg-gray-800 py-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
        href: "/",
        className: "mx-5",
        children: "Home"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
        href: "/about",
        className: "mx-5",
        children: "About"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
        href: "/contact",
        className: "mx-5",
        children: "Contact"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("article", {
      className: "h-full",
      children: children
    })]
  });
}

/***/ })

}]);