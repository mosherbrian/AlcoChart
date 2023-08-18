// Your JavaScript code will go here
var score = 0;

var accordion = document.getElementById('accordion');
var toastNotification = document.getElementById('toastNotification');

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
