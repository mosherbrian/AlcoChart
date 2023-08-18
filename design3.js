// Your JavaScript code will go here
var dailyAlcoholIntake = 0;

var typeOptions = {
    'Beer': { size: ['12oz', '16oz', '22oz'], strength: ['4%', '5%', '6%'] },
    'Wine': { size: ['5oz', '10oz'], strength: ['12%', '14%', '16%'] },
    'Cocktail': { size: ['2oz', '3oz', '4oz'], strength: ['20%', '30%', '40%'] }
};

var typeDial = document.getElementById('typeDial');
var sizeDial = document.getElementById('sizeDial');
var strengthDial = document.getElementById('strengthDial');

typeDial.addEventListener('change', function() {
    updateDial(sizeDial, typeOptions[this.value].size);
    updateDial(strengthDial, typeOptions[this.value].strength);
    updateScore();
});

sizeDial.addEventListener('change', updateScore);
strengthDial.addEventListener('change', updateScore);

function updateDial(dial, options) {
    dial.innerHTML = '';
    options.forEach(function(option) {
        var optionElement = document.createElement('option');
        optionElement.textContent = option;
        dial.appendChild(optionElement);
    });
}

updateDial(typeDial, Object.keys(typeOptions));

function updateScore() {
    var size = parseInt(sizeDial.value);
    var strength = parseInt(strengthDial.value);
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
