// function resizeIFrameToFitContent(iFrame) {
//   // iFrame.width = iFrame.contentWindow.document.body.scrollWidth;
//   // iFrame.height = iFrame.contentWindow.document.body.scrollHeight;

//   console.log(iFrame.src);
//   console.log(iFrame.contentWindow.window);
//   //console.log(iFrame.contentWindow.document.documentElement.scrollWidth);
// }

// window.addEventListener("DOMContentLoaded", function(e) {
//   console.log("DOMContentLoaded")
//   var iframes = document.querySelectorAll("iframe");
//   for (var i = 0; i < iframes.length; i++) {
//     resizeIFrameToFitContent(iframes[i]);
//   }
// });

// function getDocHeight(doc) {
//   doc = doc || document;
//   // stackoverflow.com/questions/1145850/
//   var body = doc.body, html = doc.documentElement;
//   var height = Math.max(body.scrollHeight, body.offsetHeight,
//     html.clientHeight, html.scrollHeight, html.offsetHeight);
//   return height;
// }

// function getIFrameHeight(id) {
//   // Create browser compatible event handler.
//   var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
//   var eventer = window[eventMethod];
//   var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
//   // Listen for a message from the iframe.
//   eventer(messageEvent, function (e) {
//     if (isNaN(e.data)) return;

//     // replace #sizetracker with what ever what ever iframe id you need
//     document.getElementById(id).style.height = e.data + 'px';

//   }, false);
// }