// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "clicked_browser_action" ) {
      window.open(location.href, "detab", "toolbar=0");
    }
  }
);
