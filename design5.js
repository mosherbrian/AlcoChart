// Your JavaScript code will go here
var score = 0;

var accordion = document.getElementById('accordion');
var toastNotification = document.getElementById('toastNotification');

// TODO: Add code to handle accordion and slider interactions

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
