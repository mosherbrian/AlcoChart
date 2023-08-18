document.getElementById('beerButton').addEventListener('click', function() {
    // Update the list view and score based on the beer options
});

document.getElementById('wineButton').addEventListener('click', function() {
    // Update the list view and score based on the wine options
});

document.getElementById('cocktailButton').addEventListener('click', function() {
    // Update the list view and score based on the cocktail options
});

function updateScore() {
    // Update the score based on the selected options
}

function showToastNotification() {
    var toastNotification = document.getElementById('toastNotification');
    toastNotification.style.display = 'block';
    setTimeout(function() {
        toastNotification.style.display = 'none';
    }, 3000);
}
