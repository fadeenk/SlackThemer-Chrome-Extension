'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(tabId => {
  chrome.tabs.get(tabId, function(tab){
    if(tab.url.match(/(.slack.com)+/g)){
      chrome.pageAction.show(tabId);
    }
  });
});
