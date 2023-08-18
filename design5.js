// Your JavaScript code will go here
var score = 0;

var accordion = document.getElementById('accordion');
var toastNotification = document.getElementById('toastNotification');

// Hardcoded accordion data
var accordionData = [
    {
        "name": "Drink Type",
        "options": ["Beer", "Wine", "Cocktail", "Custom"],
        "info": "Select the type of alcoholic beverage."
    },
    {
        "name": "Size/CocktailType",
        "options": {
            "Beer": ["8oz", "10oz", "12oz", "16oz", "20oz"],
            "Wine": ["4oz", "5oz", "6oz", "9oz"],
            "Cocktail": ["Old-fashioned", "Manhattan", "Highball", "Sour"],
            "Custom": ["Ounces slider"]
        },
        "info": "Choose the size of your drink or type of cocktail."
    },
    {
        "name": "Alcohol Content",
        "options": {
            "8oz": ["4%", "5%", "6%", "7%", "8%", "9%", "10%"],
            "10oz": ["4%", "5%", "6%", "7%", "8%", "9%", "10%"],
            "12oz": ["4%", "5%", "6%", "7%", "8%", "9%", "10%"],
            "16oz": ["4%", "5%", "6%", "7%", "8%", "9%", "10%"],
            "20oz": ["4%", "5%", "6%", "7%", "8%", "9%", "10%"],
            "4oz": ["10%", "11%", "12%", "13%", "14%", "20%"],
            "5oz": ["10%", "11%", "12%", "13%", "14%", "20%"],
            "6oz": ["10%", "11%", "12%", "13%", "14%", "20%"],
            "9oz": ["10%", "11%", "12%", "13%", "14%", "20%"],
            "Old-fashioned": ["40%", "45%", "50%", "55%"],
            "Manhattan": ["40%", "45%", "50%", "55%"],
            "Highball": ["40%", "45%", "50%", "55%"],
            "Sour": ["40%", "45%", "50%", "55%"],
            "Ounces slider": ["% slider"]
        },
        "info": "Select the alcohol content percentage."
    }
];

// Function to create the accordion structure
function createAccordion(data) {
    data.forEach(function(level) {
        var levelElement = document.createElement('div');
        levelElement.textContent = level.name;
        levelElement.classList.add('accordion-level');
        accordion.appendChild(levelElement);

        var optionsElement = document.createElement('div');
        optionsElement.classList.add('accordion-options');
        level.options.forEach(function(option) {
            var optionElement = document.createElement('div');
            optionElement.textContent = option;
            optionElement.classList.add('accordion-option');
            optionsElement.appendChild(optionElement);
        });
        accordion.appendChild(optionsElement);
    });
}

// Call the function to create the accordion when the page loads
createAccordion(accordionData);

function updateScore(value) {
    score += value;
    document.getElementById('scoreDisplay').textContent = 'Current Score: ' + score;
}

function showToastNotification() {
    toastNotification.style.display = 'block';
    setTimeout(function() {
        toastNotification.style.display = 'none';
    }, 3000);
}
