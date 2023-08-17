// Your JavaScript code will go here
var dailyAlcoholIntake = 0;

var drinkSize = 5;
var alcoholStrength = 5;

function setPreset(preset) {
    switch(preset) {
        case 'beerGlass':
            drinkSize = 12;
            alcoholStrength = 5;
            break;
        case 'beerPint':
            drinkSize = 16;
            alcoholStrength = 5;
            break;
        case 'bigBeer':
            drinkSize = 20;
            alcoholStrength = 5;
            break;
        case 'wineGlass':
            drinkSize = 5;
            alcoholStrength = 12;
            break;
        case 'cocktail':
            drinkSize = 2;
            alcoholStrength = 40;
            break;
    }
    document.getElementById('drinkSize').value = drinkSize;
    document.getElementById('alcoholStrength').value = alcoholStrength;
    updateAlcoholCount();
}

function updateDrinkSize(value) {
    drinkSize = value;
    updateAlcoholCount();
}

function updateAlcoholStrength(value) {
    alcoholStrength = value;
    updateAlcoholCount();
}

function updateAlcoholCount() {
    dailyAlcoholIntake = drinkSize * alcoholStrength;
    document.getElementById('alcoholCount').textContent = 'Current Alcohol Count: ' + dailyAlcoholIntake;
}
