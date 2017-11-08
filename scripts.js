chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {givememyinfobackplease: true}, (data) => {
        console.log(data);
        document.getElementById('cornerthonk').checked = data.cornerthinktoggled;
        document.getElementById('bigboi').checked = data.bigboitoggled;
        document.getElementById('whodidthis').checked = data.whodidthistoggled;
    });        
});

document.getElementById('cornerthonk')
.addEventListener('change', (e) => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {cornerthonk: document.getElementById('cornerthonk').checked});        
    });
});
document.getElementById('bigboi')
.addEventListener('change', (e) => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {bigboi: document.getElementById('bigboi').checked});        
    });
});
document.getElementById('whodidthis')
.addEventListener('change', (e) => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {whodidthis: document.getElementById('whodidthis').checked});        
    });
});