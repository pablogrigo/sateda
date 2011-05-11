

chrome.extension.sendRequest({host: window.location.host}, function(response) {
    console.log(response.source);
    if (response.source) {
        console.log('evaluating source code for: ' + window.location.host);
        eval(response.source);
    } else {
        console.log('no source code for: ' + window.location.host);
    }    
});


chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.what == "host")
        sendResponse({host: window.location.host});
    else
        sendResponse({}); // snub them.
});
