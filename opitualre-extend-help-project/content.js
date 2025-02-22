chrome.runtime.onMessage.addListener((Request, sender, sendResponse) => {
    if (request.action === "toggleDyslexicFont") {
        if (request.state) {
            const style = document.createElement('style');
            style.id = 'dyslexic-font';s
            style.textContent = "@font-face { font-family: 'OpenDyslexic'; src: url('path/to/font.woff2') format('woff2'); }";
            document.head.appendChild(style);
            document.body.style.fontFamily = "'OpenDyslexic', sans-serif";
        } else { 
            document.getElementById('dyslexic-font')?.remove();
            document.body.style.fontFamily = '';
        }
    }
});