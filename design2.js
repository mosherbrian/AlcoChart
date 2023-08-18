// Your JavaScript code will go here
var dailyAlcoholIntake = 0;

var typeOptions = {
    'Beer': { size: ['12oz', '16oz', '22oz'], strength: ['4%', '5%', '6%'] },
    'Wine': { size: ['5oz', '10oz'], strength: ['12%', '14%', '16%'] },
    'Cocktail': { size: ['2oz', '3oz', '4oz'], strength: ['20%', '30%', '40%'] }
};

var typeDropdown = document.getElementById('typeDropdown');
var sizeDropdown = document.getElementById('sizeDropdown');
var strengthDropdown = document.getElementById('strengthDropdown');

typeDropdown.addEventListener('change', function() {
    updateDropdown(sizeDropdown, typeOptions[this.value].size);
    updateDropdown(strengthDropdown, typeOptions[this.value].strength);
    updateScore();
});

sizeDropdown.addEventListener('change', updateScore);
strengthDropdown.addEventListener('change', updateScore);

function updateDropdown(dropdown, options) {
    dropdown.innerHTML = '';
    options.forEach(function(option) {
        var optionElement = document.createElement('option');
        optionElement.textContent = option;
        dropdown.appendChild(optionElement);
    });
}

updateDropdown(typeDropdown, Object.keys(typeOptions));

document.getElementById('quickSelections').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        var size = parseInt(event.target.textContent.split(',')[0]);
        var strength = parseInt(event.target.textContent.split(',')[1]);
        dailyAlcoholIntake = size * (strength / 100);
        updateScore();
    }
});

function updateScore() {
    var size = parseInt(sizeDropdown.value);
    var strength = parseInt(strengthDropdown.value);
    dailyAlcoholIntake = size * (strength / 100);
    document.getElementById('alcoholCount').textContent = 'Current Alcohol Count: ' + dailyAlcoholIntake;
    showToastNotification();
}

function showToastNotification() {
    var toastNotification = document.getElementById('toastNotification');
    toastNotification.style.display = 'block';
    setTimeout(function() {
        toastNotification.style.display = 'none';
    }, 3000);
}
