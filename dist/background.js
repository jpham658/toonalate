/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "clickElement") {
      console.log(request.html);
    }
  });
  
/******/ })()
;
//# sourceMappingURL=background.js.map