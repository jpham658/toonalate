/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onInstalled.addListener( async () => {
  for(const cs of chrome.runtime.getManifest().content_scripts){
    for (const tab of await chrome.tabs.query({url: cs.matches})) {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: cs.js,
      });
    }
  }
});

chrome.runtime.onMessage.addListener( (req, sender, res) => {
  console.log("This is where the screenshotted text will be caught");
  if(req.message === "screenshot"){
    res({message: "catch-text"})
  }
});
/******/ })()
;
//# sourceMappingURL=background.js.map