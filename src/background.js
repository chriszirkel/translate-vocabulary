// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
//chrome.extension.onMessage.addListener(
//  function(request, sender, sendResponse) {
//  	chrome.pageAction.show(sender.tab.id);
//    sendResponse();
//  });

// background.js
chrome.browserAction.onClicked.addListener(function (tab) {
    // for the current tab, inject the "inject.js" file & execute it
    //chrome.tabs.executeScript(tab.id, {
    //    file: 'src/inject.js'
    //});

    //chrome.runtime.sendMessage('message', function(response) {
    //    console('sendResponse was called with: ' + response);
    //});

    chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
        console.log("send message: background");
    });
});