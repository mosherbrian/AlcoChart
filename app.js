// Your JavaScript code will go here
var dailyAlcoholIntake = 0;

var drinkSize = 5;
var alcoholStrength = 5;

function setBeerSize(size) {
    drinkSize = size;
    updateAlcoholCount();
}

function setBeerStrength(strength) {
    alcoholStrength = strength;
    updateAlcoholCount();
}

function setWineSize(size) {
    drinkSize = size;
    updateAlcoholCount();
}

function setWineStrength(strength) {
    alcoholStrength = strength;
    updateAlcoholCount();
}

function setCocktailBaseSize(size) {
    drinkSize = size;
    updateAlcoholCount();
}

function setCocktailBaseStrength(strength) {
    alcoholStrength = strength;
    updateAlcoholCount();
}

var modifierSize = 0;
var modifierStrength = 0;

function setCocktailModifierSize(size) {
    modifierSize = size;
    updateAlcoholCount();
}

function setCocktailModifierStrength(strength) {
    modifierStrength = strength;
    updateAlcoholCount();
}

function changeTab(tab) {
    var tabs = document.getElementsByClassName('tabContent');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(tab + 'Tab').style.display = 'block';
}

function initTabs() {
    var tabs = document.getElementsByClassName('tabContent');
    for (var i = 1; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
}

window.onload = initTabs;

function updateAlcoholCount() {
    dailyAlcoholIntake = (drinkSize * alcoholStrength) + (modifierSize * modifierStrength);
    document.getElementById('alcoholCount').textContent = 'Current Alcohol Count: ' + dailyAlcoholIntake;
}

function loadDesign(design) {
    console.log('loadDesign called with design:', design);
    if (design === 'design1') {
        // Load design1
        console.log('Loading design1...');
        var oldScript = document.getElementById('designScript');
        var oldLink = document.getElementById('designCSS');
        if (oldScript) oldScript.remove();
        if (oldLink) oldLink.remove();
        var script = document.createElement('script');
        script.src = 'design1/app.js';
        script.id = 'designScript';
        document.head.appendChild(script);
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'design1/style.css';
        link.id = 'designCSS';
        document.head.appendChild(link);
    }
    // Add more conditions here for other designs
}
