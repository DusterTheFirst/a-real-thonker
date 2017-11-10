getTabs((tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {givememyinfobackplease: true}, (data) => {
        console.log(data);
        document.getElementById('cornerthonk').checked = data.cornerthinktoggled;
        document.getElementById('bigboi').checked = data.bigboitoggled;
        document.getElementById('whodidthis').checked = data.whodidthistoggled;
    });        
});

document.getElementById('cornerthonk')
.addEventListener('change', (e) => {
    getTabs((tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {cornerthonk: document.getElementById('cornerthonk').checked});        
    });
});
document.getElementById('bigboi')
.addEventListener('change', (e) => {
    getTabs((tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {bigboi: document.getElementById('bigboi').checked});        
    });
});
document.getElementById('whodidthis')
.addEventListener('change', (e) => {
    getTabs((tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {whodidthis: document.getElementById('whodidthis').checked});        
    });
});
document.getElementById('expand')
.addEventListener('click', (e) => {
    document.body.style.height = "1000px";
    document.body.style.width = "1000px";
});


getTabs((tabs) => {
    let url = parseURL(tabs[0].url)
    if (url.protocol === 'chrome:') {
        document.getElementById('body').style.display = "none";
        document.getElementById('no').style.display = "block";
    }

    
    document.getElementById('url').innerHTML = tabs[0].url;
});

/**
 * Get all tabs
 * @param {(tabs) => void} callback Callback to call
 */
function getTabs(callback) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        callback(tabs);
    });
}

/**
 * Parse a url
 * @param {String} url URL to parse
 * @returns {HTMLAnchorElement}
 */
function parseURL(url) {
    let parser = document.createElement('a');
    parser.href = url;
    return parser;
}