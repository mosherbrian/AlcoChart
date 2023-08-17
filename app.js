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

function updateAlcoholCount() {
    dailyAlcoholIntake = (drinkSize * alcoholStrength) + (modifierSize * modifierStrength);
    document.getElementById('alcoholCount').textContent = 'Current Alcohol Count: ' + dailyAlcoholIntake;
}
