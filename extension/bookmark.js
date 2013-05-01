closeEventBound = false;
 
chrome.commands.onCommand.addListener(function(command) {
    
    if (command === 'read-later-with-instapaper') {
 
        chrome.tabs.getSelected(null, function (tab) {
 
            if (tab.url.substring(0,9) == 'chrome://') {
                return;
            }
            // Send a message to call the Instapaper bookmarklet
            // code for the current document
            chrome.tabs.sendMessage(tab.id, {action: "readLater"});
 
        });
 
    }
 
});