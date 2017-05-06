// content-script.js
"use strict";

chrome.runtime.onMessage.addListener(request => {
  console.log(request.greeting);
  console.log('reststaurant info loaded');
  var $resItem = $('.restaurant-container')[0];
  var mapDiv = document.createElement('div');
  mapDiv.innerHTML = '<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=delhi&key=AIzaSyCEEHDMXaQK1ax-6EuR5fe9YMSHUIAytjY" allowfullscreen></iframe> '
  $resItem.parentNode.parentNode.insertBefore(mapDiv, $resItem.parentNode);
  console.log('done');
  return Promise.resolve();
});

console.log('I am alive');


      



