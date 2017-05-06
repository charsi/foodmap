"use strict";



function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,requestDetails);
    });
}

chrome.webRequest.onCompleted.addListener(
  logURL,
  {urls: ["https://www.swiggy.com/api/restaurants/list*"]}
);
