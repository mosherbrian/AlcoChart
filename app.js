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

function updateValues(event) {
    var x = event.clientX - event.target.offsetLeft;
    var y = event.clientY - event.target.offsetTop;

    // Assuming the chart area is 100x100 units
    drinkSize = (300 - y) / 12.5; // Scale to 0-24, invert y axis
    alcoholStrength = x; // Scale to 0-100

    document.getElementById('selectedPoint').style.left = x + 'px';
    document.getElementById('selectedPoint').style.top = y + 'px';

    updateAlcoholCount();
}

function updateAlcoholCount() {
    dailyAlcoholIntake = drinkSize * alcoholStrength;
    document.getElementById('alcoholCount').textContent = 'Current Alcohol Count: ' + dailyAlcoholIntake;
}
