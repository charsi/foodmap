"use strict";

function onError(error) {
  console.error(`Error: ${error}`);
}

function sendMessageToTabs(tabs) {
  for (let tab of tabs) {
    browser.tabs.sendMessage(
      tab.id,
      {greeting: "Hi from background script"}
    ).catch(onError);
  }
}


function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(sendMessageToTabs).catch(onError);
}

chrome.webRequest.onCompleted.addListener(
  logURL,
  {urls: ["https://www.swiggy.com/api/restaurants/list*"]}
);
