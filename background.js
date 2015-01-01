chrome.contextMenus.create({
	title: "Open video image in new tab",
	documentUrlPatterns: ["*://www.youtube.com/watch*"],
	onclick: function(info, tab) {
		chrome.tabs.sendMessage(tab.id, {
			clicked: true,
			info: info,
			tab: tab
		}, function(response) {
			if (!response.url)
				return;
			chrome.tabs.create({ url: response.url });
		});
	}
});
