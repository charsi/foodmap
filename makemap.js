// content-script.js
"use strict";

var requestCount = 0;
var $resItem;
var mapIframeHtml = '\
  <iframe width="100%" height="450" frameborder="0" style="border:0" \
  src="https://www.google.com/maps/embed/v1/place?q=delhi&key=AIzaSyCEEHDMXaQK1ax-6EuR5fe9YMSHUIAytjY" \
  allowfullscreen></iframe>';

function showMap(){
  // find first div with class 'restaurant container'
  $resItem = $('.restaurant-container')[0];
  var mapDiv = document.createElement('div');
  mapDiv.innerHTML = mapIframeHtml;
  // insert map into DOM
  $resItem.parentNode.parentNode.insertBefore(mapDiv, $resItem.parentNode);
}

function updateMap(){
}

// Wait for message from background script
chrome.runtime.onMessage.addListener(request => {
  console.log(request);
  // only create new map for first api call
  if (requestCount===0){
    showMap();
  }else {
    updateMap();
  }
});

console.log('I am alive');


      



