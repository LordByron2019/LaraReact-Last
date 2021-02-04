(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Contact_Show_js"],{

/***/ "./resources/js/Pages/Contact/Show.js":
/*!********************************************!*\
  !*** ./resources/js/Pages/Contact/Show.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Welcome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Layouts_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layouts/App */ "./resources/js/Pages/Layouts/App.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Welcome(_ref) {
  var contact = _ref.contact,
      previous_url = _ref.previous_url,
      update_url = _ref.update_url;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1];

  function getSex(sex) {
    if (sex == "homme") {
      return "femme";
    } else {
      return "homme";
    }
  }

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    name: contact.name || '',
    sex: contact.sex || '',
    city: contact.city || '',
    country: contact.country || '',
    indicatif: contact.indicatif || '',
    phone_number: contact.phone_number || ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      values = _useState4[0],
      setValues = _useState4[1];

  function handleChange(e) {
    var key = e.target.name;
    var value = e.target.value;
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.put(update_url, values).then(function () {
      setSending(false);
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layouts_App__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "Contact",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
      className: "my-5 p-5 text-green-500 text-center text-2xl",
      children: ["Toutes les informations concernant l'utilisateur : ", contact.name]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "h-full w-full flex justify-center my-5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "w-full inline-block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
          onSubmit: handleSubmit,
          className: "w-full inline-block flex justify-center my-5",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-2/3 grid grid-cols-2 gap-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "flex justify-between items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                htmlFor: "name",
                className: "mx-1 w-1/3 text-xl font-bold uppercase text-green-500",
                children: "Name:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                onChange: handleChange,
                type: "text",
                value: values.name,
                className: "w-full bg-transparent border-2 rounded border-green-500 text-white focus:outline-none focus:ring-green-400 focus:border-green-500 hover:bg-gray-500 active:bg-gray-500",
                name: "name",
                id: "name"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "flex justify-between items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                htmlFor: "sex",
                className: "mx-1 w-1/3 text-xl font-bold uppercase text-green-500",
                children: "Sex:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                onChange: handleChange,
                name: "sex",
                id: "sex",
                className: "w-full bg-transparent border-2 rounded border-green-500 text-white focus:outline-none focus:ring-green-400 focus:border-green-500 hover:bg-gray-500 active:bg-gray-500",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                  value: values.sex,
                  children: values.sex
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                  value: getSex(values.sex),
                  children: getSex(values.sex)
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "flex justify-between items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                htmlFor: "city",
                className: "mx-1 w-1/3 text-xl font-bold uppercase text-green-500",
                children: "City:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                onChange: handleChange,
                type: "text",
                value: values.city,
                className: "w-full bg-transparent border-2 rounded border-green-500 text-white focus:outline-none focus:ring-green-400 focus:border-green-500 hover:bg-gray-500 active:bg-gray-500",
                name: "city",
                id: "city"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "flex justify-between items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                htmlFor: "country",
                className: "mx-1 w-1/3 text-xl font-bold uppercase text-green-500",
                children: "Country:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                onChange: handleChange,
                type: "text",
                value: values.country,
                className: "w-full bg-transparent border-2 rounded border-green-500 text-white focus:outline-none focus:ring-green-400 focus:border-green-500 hover:bg-gray-500 active:bg-gray-500",
                name: "country",
                id: "country"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "flex justify-between items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                htmlFor: "indicatif",
                className: "mx-1 w-1/3 text-xl font-bold uppercase text-green-500",
                children: "Indicatif:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                onChange: handleChange,
                type: "text",
                value: values.indicatif,
                className: "w-full bg-transparent border-2 rounded border-green-500 text-white focus:outline-none focus:ring-green-400 focus:border-green-500 hover:bg-gray-500 active:bg-gray-500",
                name: "indicatif",
                id: "indicatif"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "flex justify-between items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                htmlFor: "phone_number",
                className: "mx-1 w-1/3 text-xl font-bold uppercase text-green-500",
                children: "Number:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                onChange: handleChange,
                type: "text",
                value: values.phone_number,
                className: "w-full bg-transparent border-2 rounded border-green-500 text-white focus:outline-none focus:ring-green-400 focus:border-green-500 hover:bg-gray-500 active:bg-gray-500",
                name: "phone_number",
                id: "phone_number"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "col-span-2 mt-5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.InertiaLink, {
                href: previous_url,
                className: "float-right mx-3 border-2 py-2 rounded-xl px-5 border-red-500 bg-red-500 text-white uppercase font-bold hover:bg-red-700 focus:bg-red-700",
                children: "Retour"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_5__.default, {
                loading: sending,
                type: "submit",
                className: "float-right mx-3 border-2 py-2 rounded-xl px-5 border-blue-500 bg-blue-500 text-white uppercase font-bold hover:bg-blue-700 focus:bg-blue-700",
                children: "Update Contact"
              })]
            })]
          })
        })
      })
    })]
  });
}

/***/ }),

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

/***/ }),

/***/ "./resources/js/Shared/LoadingButton.js":
/*!**********************************************!*\
  !*** ./resources/js/Shared/LoadingButton.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var loading = _ref.loading,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["loading", "className", "children"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", _objectSpread(_objectSpread({
    disabled: loading,
    className: "focus:outline-none flex items-center ".concat(className)
  }, props), {}, {
    children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "btn-spinner mr-2"
    }), children]
  }));
});

/***/ })

}]);