console.log('I am alive');
var $resItem = $('.restaurant-container')[0];
console.log($resItem);
var mapDiv = document.createElement('div');
mapDiv.innerHTML = '<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=delhi&key=AIzaSyCEEHDMXaQK1ax-6EuR5fe9YMSHUIAytjY" allowfullscreen></iframe> '
$resItem.parentNode.parentNode.insertBefore(mapDiv,$resItem.parentNode);
console.log('done')


var pattern = "https://mdn.mozillademos.org/*";

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  // return {
  //   redirectUrl: "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif"
  // };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern]},
  ["blocking"]
);