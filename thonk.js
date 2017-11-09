/// <reference path="thonkmanager.js"/>

//cold
console.log('%c🤔🤔🤔🤔', 'font-size:100px');
console.log('%ci see you know how to open dev tools, good job', 'color: #bada55; font-size:30px');

const thonkmanager = new ThonkManager();

//#region CORNER THONKS
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

thonkmanager.bind('cornerthonks', topleft, topright, bottomleft, bottomright);
thonkmanager.listen('cornerthonks', (thonker, value, index, items) => {
    if (value) {
        thonker.classList.add('show');   
    } else {
        thonker.classList.remove('show');  
    }
})
//#endregion

//#region BIGBOI
let bigboi = document.createElement('div');
bigboi.innerHTML = "🤔";
bigboi.classList.add('thonk');
bigboi.classList.add('bigboi');
document.body.appendChild(bigboi);

thonkmanager.bind('bigboi', bigboi);
thonkmanager.listen('bigboi', (thonker, value, index, items) => {
    if (value) {
        thonker.classList.add('show');   
    } else {
        thonker.classList.remove('show');  
    }
})
//#endregion

//#region WHODIDTHIS 😂😂😂
let whodidthis = document.createElement('div');
whodidthis.innerHTML = "😂😂😂 WHO DID THIS??? 😂😂😂";
whodidthis.classList.add('whodidthis');
document.body.appendChild(whodidthis);

thonkmanager.bind('whodidthis', whodidthis);
thonkmanager.listen('whodidthis', (thonker, value, index, items) => {
    if (value) {
        thonker.classList.add('show');   
    } else {
        thonker.classList.remove('show');  
    }
})
//#endregion

//LIT 🔥🔥🔥👌

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    
    if (request.cornerthonk !== undefined)
        thonkmanager.set('cornerthonks', request.cornerthonk);
    
    if (request.bigboi !== undefined)
        thonkmanager.set('bigboi', request.bigboi);

    if (request.whodidthis !== undefined)
        thonkmanager.set('whodidthis', request.whodidthis);

    if (request.givememyinfobackplease) {
        sendResponse({
            cornerthinktoggled: cornerthinktoggled,
            bigboitoggled: bigboitoggled,
            whodidthistoggled: whodidthistoggled
        })
    }
});

//just right ✋😩👌