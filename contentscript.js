
var host = window.location.host;

chrome.extension.sendRequest({host: host}, function(response) {
    if (response.source)
        eval(response.source);
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.what == 'host')
        sendResponse({host: host});
    else
        sendResponse({});
});
