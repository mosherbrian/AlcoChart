// Your JavaScript code will go here
var dailyAlcoholIntake = 0;

var typeDropdown = document.getElementById('typeDropdown');
var sizeDropdown = document.getElementById('sizeDropdown');
var strengthDropdown = document.getElementById('strengthDropdown');

typeDropdown.addEventListener('change', updateScore);
sizeDropdown.addEventListener('change', updateScore);
strengthDropdown.addEventListener('change', updateScore);

document.getElementById('quickSelections').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        var size = parseInt(event.target.textContent.split(',')[0]);
        var strength = parseInt(event.target.textContent.split(',')[1]);
        dailyAlcoholIntake = size * (strength / 100);
        updateScore();
    }
});

function updateScore() {
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
