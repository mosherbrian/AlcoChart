console.log('design1/app.js loaded');
// Updated app.js file for Design #1
var dailyAlcoholIntake = 0;

var drinkSize = 5;
var alcoholStrength = 5;

function setBeer(size, strength) {
    console.log('setBeer called with size:', size, 'and strength:', strength);
    drinkSize = size;
    alcoholStrength = strength;
    updateAlcoholCount();
}

function setWine(size, strength) {
    drinkSize = size;
    alcoholStrength = strength;
    updateAlcoholCount();
}

function setCocktail(size, strength) {
    drinkSize = size;
    alcoholStrength = strength;
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

window.onload = function() {
    initTabs();
    // Change the color of all buttons
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = 'blue';
    }
};

function updateAlcoholCount() {
    dailyAlcoholIntake = drinkSize * alcoholStrength;
    document.getElementById('alcoholCount').textContent = 'Current Alcohol Count: ' + dailyAlcoholIntake;
}
