"use strict";
(() => {
var exports = {};
exports.id = "pages/api/item";
exports.ids = ["pages/api/item"];
exports.modules = {

/***/ "./pages/api/item.js":
/*!***************************!*\
  !*** ./pages/api/item.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed"
    });
  }

  console.log(req.body);
  const itemData = req.body;
  const savedItem = await prisma.item.create({
    data: itemData
  });
  res.json(savedItem);
});

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/item.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2l0ZW0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFFQSxpRUFBZSxPQUFPRSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsV0FBT0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNEOztBQUVEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsR0FBRyxDQUFDUSxJQUFoQjtBQUVBLFFBQU1DLFFBQVEsR0FBR1QsR0FBRyxDQUFDUSxJQUFyQjtBQUVBLFFBQU1FLFNBQVMsR0FBRyxNQUFNWCxNQUFNLENBQUNZLElBQVAsQ0FBWUMsTUFBWixDQUFtQjtBQUN6Q0MsSUFBQUEsSUFBSSxFQUFFSjtBQURtQyxHQUFuQixDQUF4QjtBQUlBUixFQUFBQSxHQUFHLENBQUNHLElBQUosQ0FBU00sU0FBVDtBQUNELENBZEQ7Ozs7Ozs7Ozs7QUNKQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FhcmQtc2l0ZS8uL3BhZ2VzL2FwaS9pdGVtLmpzIiwid2VicGFjazovL2FhcmQtc2l0ZS9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcblxyXG4gIGNvbnN0IGl0ZW1EYXRhID0gcmVxLmJvZHk7XHJcblxyXG4gIGNvbnN0IHNhdmVkSXRlbSA9IGF3YWl0IHByaXNtYS5pdGVtLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiBpdGVtRGF0YSxcclxuICB9KTtcclxuXHJcbiAgcmVzLmpzb24oc2F2ZWRJdGVtKTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJpdGVtRGF0YSIsInNhdmVkSXRlbSIsIml0ZW0iLCJjcmVhdGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==