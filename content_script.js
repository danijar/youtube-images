chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.clicked) {
		var element = document.querySelector("link[itemprop=thumbnailUrl]");
		if (element) {
			url = element.getAttribute("href");
			sendResponse({url: url});
		} else {
			alert("The video image could not be found on this page.");
			sendResponse({url: null});
		}
	}
});
