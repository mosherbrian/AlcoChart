// Your JavaScript code will go here
var dailyAlcoholIntake = 0;

function addDrink(drinkType, alcoholPercent) {
    var alcoholOunces;
    switch(drinkType) {
        case 'beerGlass':
            alcoholOunces = 12;
            break;
        case 'beerPint':
            alcoholOunces = 16;
            break;
        case 'bigBeer':
            alcoholOunces = 22;
            break;
        case 'wineGlass':
            alcoholOunces = 5;
            break;
        case 'cocktail':
            alcoholOunces = 1.5;
            break;
    }
    dailyAlcoholIntake += alcoholOunces * alcoholPercent;
    console.log('Daily alcohol intake: ' + dailyAlcoholIntake);
}
