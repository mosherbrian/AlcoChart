// Updated app.js file for Design #1
var dailyAlcoholIntake = 0;

var drinkSize = 5;
var alcoholStrength = 5;

function setBeer(size, strength) {
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

window.onload = initTabs;

function updateAlcoholCount() {
    dailyAlcoholIntake = drinkSize * alcoholStrength;
    document.getElementById('alcoholCount').textContent = 'Current Alcohol Count: ' + dailyAlcoholIntake;
}
