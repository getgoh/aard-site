"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/list-item.js":
/*!*********************************!*\
  !*** ./components/list-item.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "F:\\Get\\React\\ReactJS\\aard-site\\components\\list-item.js";

const ListItem = ({
  name,
  level,
  wearloc
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    class: "flex space-x-4 h-16 w-full rounded p-4 items-center cursor-pointer bg-white font-mono",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "flex-1",
      children: ["Name: ", name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "flex-1",
      children: ["Wearable: ", wearloc]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "flex-2",
      children: ["Level: ", level]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/list-item */ "./components/list-item.js");
/* harmony import */ var _utils_prisma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/prisma */ "./utils/prisma.js");

var _jsxFileName = "F:\\Get\\React\\ReactJS\\aard-site\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();


async function getServerSideProps() {
  var items = await _utils_prisma__WEBPACK_IMPORTED_MODULE_4__.default.item.findMany();
  const itemTypes = await _utils_prisma__WEBPACK_IMPORTED_MODULE_4__.default.itemType.findMany();
  items = items.map(i => {
    i.type = itemTypes.find(it => it.id === i.type).type;
    return i;
  });
  console.log(items);
  return {
    props: {
      initialItems: items
    }
  };
}
function Home({
  initialItems
}) {
  const {
    0: items,
    1: setItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialItems);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    class: "container mx-auto",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Aard Database"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Item database for Aardwolf"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "p-8 space-y-5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "flex",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            placeholder: "Search",
            class: "placeholder-gray-500 flex-grow block h-16 p-6 focus:border-transparent rounded text-2xl"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), items.map(item => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_list_item__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, item), item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 20
          }, this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/prisma.js":
/*!*************************!*\
  !*** ./utils/prisma.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
 // See here: https://github.com/prisma/prisma-client-js/issues/228#issuecomment-618433162

let prisma;

if (false) {} // `stg` or `dev`
else {
    if (!global.prisma) {
      global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
    }

    prisma = global.prisma;
  }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hERDs7QUFDQSxJQUFJWixNQUFKOztBQUVBLElBQUksT0FBdUMsRUFBM0MsQ0FHQTtBQUhBLEtBSUs7QUFDSCxRQUFJLENBQUNvQixNQUFNLENBQUNwQixNQUFaLEVBQW9CO0FBQ2xCb0IsTUFBQUEsTUFBTSxDQUFDcEIsTUFBUCxHQUFnQixJQUFJbUIsd0RBQUosRUFBaEI7QUFDRDs7QUFFRG5CLElBQUFBLE1BQU0sR0FBR29CLE1BQU0sQ0FBQ3BCLE1BQWhCO0FBQ0Q7O0FBRUQsaUVBQWVBLE1BQWY7Ozs7Ozs7Ozs7QUNqQkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYXJkLXNpdGUvLi9jb21wb25lbnRzL2xpc3QtaXRlbS5qcyIsIndlYnBhY2s6Ly9hYXJkLXNpdGUvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hYXJkLXNpdGUvLi91dGlscy9wcmlzbWEuanMiLCJ3ZWJwYWNrOi8vYWFyZC1zaXRlL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly9hYXJkLXNpdGUvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9hYXJkLXNpdGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2FhcmQtc2l0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExpc3RJdGVtID0gKHsgbmFtZSwgbGV2ZWwsIHdlYXJsb2MgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzPSdmbGV4IHNwYWNlLXgtNCBoLTE2IHctZnVsbCByb3VuZGVkIHAtNCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgYmctd2hpdGUgZm9udC1tb25vJz5cclxuICAgICAgPGRpdiBjbGFzcz0nZmxleC0xJz5OYW1lOiB7bmFtZX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nZmxleC0xJz5XZWFyYWJsZToge3dlYXJsb2N9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2ZsZXgtMic+TGV2ZWw6IHtsZXZlbH08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9saXN0LWl0ZW1cIjtcblxuLy8gaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG4vLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uL3V0aWxzL3ByaXNtYVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICB2YXIgaXRlbXMgPSBhd2FpdCBwcmlzbWEuaXRlbS5maW5kTWFueSgpO1xuICBjb25zdCBpdGVtVHlwZXMgPSBhd2FpdCBwcmlzbWEuaXRlbVR5cGUuZmluZE1hbnkoKTtcbiAgaXRlbXMgPSBpdGVtcy5tYXAoKGkpID0+IHtcbiAgICBpLnR5cGUgPSBpdGVtVHlwZXMuZmluZCgoaXQpID0+IGl0LmlkID09PSBpLnR5cGUpLnR5cGU7XG4gICAgcmV0dXJuIGk7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhpdGVtcyk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGluaXRpYWxJdGVtczogaXRlbXMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGluaXRpYWxJdGVtcyB9KSB7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoaW5pdGlhbEl0ZW1zKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPSdjb250YWluZXIgbXgtYXV0byc+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFhcmQgRGF0YWJhc2U8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nSXRlbSBkYXRhYmFzZSBmb3IgQWFyZHdvbGYnIC8+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzcz0ncC04IHNwYWNlLXktNSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaCdcbiAgICAgICAgICAgICAgY2xhc3M9J3BsYWNlaG9sZGVyLWdyYXktNTAwIGZsZXgtZ3JvdyBibG9jayBoLTE2IHAtNiBmb2N1czpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZCB0ZXh0LTJ4bCdcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxMaXN0SXRlbSBrZXk9e2l0ZW0uaWR9IHsuLi5pdGVtfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbi8vIFNlZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS1jbGllbnQtanMvaXNzdWVzLzIyOCNpc3N1ZWNvbW1lbnQtNjE4NDMzMTYyXHJcbmxldCBwcmlzbWE7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59XHJcbi8vIGBzdGdgIG9yIGBkZXZgXHJcbmVsc2Uge1xyXG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xyXG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICB9XHJcblxyXG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiTGlzdEl0ZW0iLCJuYW1lIiwibGV2ZWwiLCJ3ZWFybG9jIiwidXNlU3RhdGUiLCJIZWFkIiwicHJpc21hIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiaXRlbXMiLCJpdGVtIiwiZmluZE1hbnkiLCJpdGVtVHlwZXMiLCJpdGVtVHlwZSIsIm1hcCIsImkiLCJ0eXBlIiwiZmluZCIsIml0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJpbml0aWFsSXRlbXMiLCJIb21lIiwic2V0SXRlbXMiLCJQcmlzbWFDbGllbnQiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9