chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "clickElement") {
      console.log(request.html);
    }
  });
  