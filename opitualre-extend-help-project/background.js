chrome.runtime.onInstalled.addListener(() => {
    console.log('extension installed.');
    
    chrome.storage.sync.set({ contrastMode: false, fontSize: 'normal' }, () => {
        console.log('Default settings initialized.');
    });
});
