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
function createAccordion(data, parentElement) {
    data.forEach(function(level) {
        var levelElement = document.createElement('div');
        levelElement.textContent = level.name;
        levelElement.classList.add('accordion-level');
        parentElement.appendChild(levelElement);

        var optionsElement = document.createElement('div');
        optionsElement.classList.add('accordion-options');
        optionsElement.style.display = 'none'; // Hide the options initially
        levelElement.appendChild(optionsElement);

        if (optionsElement !== undefined) {
            if (Array.isArray(level.options)) {
                level.options.forEach(function(option) {
                    var optionElement = document.createElement('div');
                    optionElement.textContent = option;
                    optionElement.classList.add('accordion-option');
                    optionsElement.appendChild(optionElement);
                });
            } else if (level.options !== null && level.options !== undefined) {
                Object.keys(level.options).forEach(function(key) {
                    var optionElement = document.createElement('div');
                    optionElement.textContent = key;
                    optionElement.classList.add('accordion-option');
                    optionsElement.appendChild(optionElement);

                    createAccordion(level.options[key], optionElement);
                });
            }
        }

        // Add a click event listener to the level
        levelElement.addEventListener('click', function(event) {
            event.stopPropagation();

            // Toggle the display of the options
            optionsElement.style.display = optionsElement.style.display === 'none' ? 'block' : 'none';

            // Hide all other levels that are not ancestors or descendants of the clicked level
            var otherLevels = document.querySelectorAll('.accordion-level');
            otherLevels.forEach(function(otherLevel) {
                if (!levelElement.contains(otherLevel) && !otherLevel.contains(levelElement)) {
                    var otherOptions = otherLevel.querySelector('.accordion-options');
                    if (otherOptions) {
                        otherOptions.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Call the function to create the accordion when the page loads
createAccordion(accordionData, accordion);

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
