'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.tabs.get(tabId, function (tab) {
    if (tab.url.match(/(.slack.com)+/g)) {
      chrome.pageAction.show(tabId);
    }
  });
});
//# sourceMappingURL=background.js.map
