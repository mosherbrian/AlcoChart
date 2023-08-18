// Your JavaScript code will go here
var score = 0;

var cards = [
    { title: 'Beer', subtitle: '12oz, 4%' },
    { title: 'Wine', subtitle: '5oz, 12%' }
];

var cardGroup = document.getElementById('cardGroup');
var customButton = document.getElementById('customButton');

cards.forEach(function(card) {
    var cardElement = document.createElement('div');
    cardElement.textContent = card.title + ': ' + card.subtitle;
    cardElement.addEventListener('click', function() {
        score += 10; // Update the score based on the card
        updateScore();
    });
    cardGroup.appendChild(cardElement);
});

customButton.addEventListener('click', function() {
    score += 20; // Update the score based on the custom drink
    updateScore();
    showToastNotification();
});

function updateScore() {
    document.getElementById('score').textContent = 'Current Score: ' + score;
}

function showToastNotification() {
    var toastNotification = document.getElementById('toastNotification');
    toastNotification.style.display = 'block';
    setTimeout(function() {
        toastNotification.style.display = 'none';
    }, 3000);
}
