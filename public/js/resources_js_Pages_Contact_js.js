(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Contact_js"],{

/***/ "./resources/js/Pages/Contact.js":
/*!***************************************!*\
  !*** ./resources/js/Pages/Contact.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Welcome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Layouts_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layouts/App */ "./resources/js/Pages/Layouts/App.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/Pagination */ "./resources/js/Shared/Pagination.js");






function Welcome(_ref) {
  var contacts = _ref.contacts;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layouts_App__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "Contact",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
      className: "my-5 p-5 text-white text-4xl",
      children: "Tous les contacts"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "my-5 p-5 block justify-center items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
        className: "table w-full table-auto border-2 border-blue-50",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("thead", {
          className: "table-row-group table-header-group bg-gray-800 text-white text-2xl uppercase  border-2 border-blue-50 p-2 text-left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
            className: "table-cell border-l-2 border-blue-50",
            children: "nom"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
            className: "table-cell border-l-2 border-blue-50",
            children: "indicatif"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
            className: "table-cell border-l-2 border-blue-50",
            children: "numero"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
            className: "table-cell border-l-2 border-blue-50",
            children: "Pays"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
            className: "table-cell border-l-2 border-blue-50",
            children: "Ville"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
            className: "table-cell border-l-2 border-blue-50",
            children: "sexe"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
            className: "table-cell border-l-2 border-blue-50 text-center",
            children: "Actions"
          })]
        }), contacts.data.map(function (contact) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", {
            className: "table-row-group bg-blue-100 border-2 border-blue-50",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                className: "border-l-2 border-blue-50",
                children: contact.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                className: "border-l-2 border-blue-50",
                children: ["+", contact.indicatif]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                className: "border-l-2 border-blue-50",
                children: contact.phone_number
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                className: "border-l-2 border-blue-50",
                children: contact.country
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                className: "border-l-2 border-blue-50",
                children: contact.city
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                className: "border-l-2 border-blue-50",
                children: contact.sex
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                className: "border-l-2 border-blue-50 text-center my-2 py-2 text-white text-xl",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.InertiaLink, {
                  href: 'contact/' + contact.id,
                  className: "my-2 py-2 px-4 bg-blue-500 border rounded border-black hover:bg-gray-400",
                  children: "Edit"
                })
              })]
            }, contact.id)
          });
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_Pagination__WEBPACK_IMPORTED_MODULE_4__.default, {
          links: contacts.links
        })
      })]
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

/***/ "./resources/js/Shared/Pagination.js":
/*!*******************************************!*\
  !*** ./resources/js/Shared/Pagination.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





var PageLink = function PageLink(_ref) {
  var active = _ref.active,
      label = _ref.label,
      url = _ref.url;
  var className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(['mr-1 mb-1', 'px-4 py-3', 'border rounded', 'text-sm', 'hover:bg-blue-100', 'focus:border-indigo-700 focus:text-indigo-700'], {
    'bg-blue-100': active,
    'ml-auto': label === 'Next'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
    className: className,
    href: url,
    children: label
  });
}; // Previous, if on first page
// Next, if on last page
// and dots, if exists (...)


var PageInactive = function PageInactive(_ref2) {
  var label = _ref2.label;
  var className = classnames__WEBPACK_IMPORTED_MODULE_3___default()('mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray', {
    'ml-auto': label === 'Next'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: className,
    children: label
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref3) {
  var _ref3$links = _ref3.links,
      links = _ref3$links === void 0 ? [] : _ref3$links;
  // dont render, if there's only 1 page (previous, 1, next)
  if (links.length === 3) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "mt-6 -mb-1 flex flex-wrap",
    children: links.map(function (_ref4) {
      var active = _ref4.active,
          label = _ref4.label,
          url = _ref4.url;
      return url === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PageInactive, {
        label: label
      }, label) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PageLink, {
        label: label,
        active: active,
        url: url
      }, label);
    })
  });
});

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

}]);