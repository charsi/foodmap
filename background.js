"use strict";



function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
  // notify content script
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,requestDetails);
    });
}

// wait for API request for restaurant list to complete
chrome.webRequest.onCompleted.addListener(
  logURL,
  {urls: ["https://www.swiggy.com/api/restaurants/list*"]}
);
