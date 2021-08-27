"use strict";
(() => {
var exports = {};
exports.id = "pages/item/[id]";
exports.ids = ["pages/item/[id]"];
exports.modules = {

/***/ "./pages/item/[id].js":
/*!****************************!*\
  !*** ./pages/item/[id].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "F:\\Get\\React\\ReactJS\\aard-site\\pages\\item\\[id].js";



const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();
async function getServerSideProps(context) {
  const {
    id
  } = context.query;
  const item = await prisma.item.findFirst({
    where: {
      id: id
    }
  });
  console.log(item);
  return {
    props: {
      initialItem: item
    }
  };
}

const Item = ({
  initialItem
}) => {
  const {
    0: item,
    1: setItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialItem);

  if (item === null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "No item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: item.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/item/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaXRlbS9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsTUFBTUcsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFFTyxlQUFlRSxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDaEQsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQVNELE9BQU8sQ0FBQ0UsS0FBdkI7QUFDQSxRQUFNQyxJQUFJLEdBQUcsTUFBTUwsTUFBTSxDQUFDSyxJQUFQLENBQVlDLFNBQVosQ0FBc0I7QUFDdkNDLElBQUFBLEtBQUssRUFBRTtBQUNMSixNQUFBQSxFQUFFLEVBQUVBO0FBREM7QUFEZ0MsR0FBdEIsQ0FBbkI7QUFLQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFDQSxTQUFPO0FBQ0xLLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxXQUFXLEVBQUVOO0FBRFI7QUFERixHQUFQO0FBS0Q7O0FBRUQsTUFBTU8sSUFBSSxHQUFHLENBQUM7QUFBRUQsRUFBQUE7QUFBRixDQUFELEtBQXFCO0FBQ2hDLFFBQU07QUFBQSxPQUFDTixJQUFEO0FBQUEsT0FBT1E7QUFBUCxNQUFrQmhCLCtDQUFRLENBQUNjLFdBQUQsQ0FBaEM7O0FBRUEsTUFBSU4sSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsd0JBQ0U7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQURGO0FBS0Q7O0FBQ0Qsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLGdCQUFLQSxJQUFJLENBQUNTO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QsQ0FmRDs7QUFpQkEsaUVBQWVGLElBQWY7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYXJkLXNpdGUvLi9wYWdlcy9pdGVtL1tpZF0uanMiLCJ3ZWJwYWNrOi8vYWFyZC1zaXRlL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly9hYXJkLXNpdGUvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2FhcmQtc2l0ZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYWFyZC1zaXRlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgY29uc3QgaXRlbSA9IGF3YWl0IHByaXNtYS5pdGVtLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBpZDogaWQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpbml0aWFsSXRlbTogaXRlbSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgSXRlbSA9ICh7IGluaXRpYWxJdGVtIH0pID0+IHtcclxuICBjb25zdCBbaXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZShpbml0aWFsSXRlbSk7XHJcblxyXG4gIGlmIChpdGVtID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxoMT5ObyBpdGVtPC9oMT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPntpdGVtLm5hbWV9PC9oMT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImlkIiwicXVlcnkiLCJpdGVtIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJpbml0aWFsSXRlbSIsIkl0ZW0iLCJzZXRJdGVtIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=