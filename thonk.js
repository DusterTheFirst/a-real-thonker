//cold
console.log('%c🤔🤔🤔🤔', 'font-size:100px');
console.log('%ci see you know how to open dev tools, good job', 'color: #bada55; font-size:30px');

let topleft = document.createElement('div');
topleft.innerHTML = "🤔";
topleft.classList.add('thonk');
topleft.classList.add('topleft');
document.body.appendChild(topleft);

let topright = document.createElement('div');
topright.innerHTML = "🤔";
topright.classList.add('thonk');
topright.classList.add('topright');
document.body.appendChild(topright);

let bottomleft = document.createElement('div');
bottomleft.innerHTML = "🤔";
bottomleft.classList.add('thonk');
bottomleft.classList.add('bottomleft');
document.body.appendChild(bottomleft);

let bottomright = document.createElement('div');
bottomright.innerHTML = "🤔";
bottomright.classList.add('thonk');
bottomright.classList.add('bottomright');
document.body.appendChild(bottomright);

let bigboi = document.createElement('div');
bigboi.innerHTML = "🤔";
bigboi.classList.add('thonk');
bigboi.classList.add('bigboi');
document.body.appendChild(bigboi);

let whodidthis = document.createElement('div');
whodidthis.innerHTML = "😂😂😂 WHO DID THIS??? 😂😂😂";
whodidthis.classList.add('whodidthis');
document.body.appendChild(whodidthis);

//LIT 🔥🔥🔥👌

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    
    if (request.cornerthonk !== undefined)
        cornerthonktoggle(request.cornerthonk);
    
    if (request.bigboi !== undefined)
        bigboitoggle(request.bigboi);

    if (request.whodidthis !== undefined)
        whodidthistoggle(request.whodidthis);

    if (request.givememyinfobackplease) {
        sendResponse({
            cornerthinktoggled: cornerthinktoggled,
            bigboitoggled: bigboitoggled,
            whodidthistoggled: whodidthistoggled
        })
    }
});

var cornerthinktoggled = false;
function cornerthonktoggle(enabled) {
    cornerthinktoggled = enabled;
    if (enabled) {
        topleft.classList.add('show');
        topright.classList.add('show');
        bottomleft.classList.add('show');
        bottomright.classList.add('show');      
    } else {
        topleft.classList.remove('show');
        topright.classList.remove('show');
        bottomleft.classList.remove('show');
        bottomright.classList.remove('show');  
    }
}

var bigboitoggled = false;
function bigboitoggle(enabled) {
    bigboitoggled = enabled;
    if (enabled) {
        bigboi.classList.add('show');   
    } else {
        bigboi.classList.remove('show');
    }
}

var whodidthistoggled = false;
function whodidthistoggle(enabled) {
    whodidthistoggled = enabled;
    if (enabled) {
        whodidthis.classList.add('show');
    } else {
        whodidthis.classList.remove('show');
        
    }
}

//just right ✋😩👌