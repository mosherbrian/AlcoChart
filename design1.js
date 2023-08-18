var listView = document.getElementById('listView');
var score = document.getElementById('score');

document.getElementById('beerButton').addEventListener('click', function() {
    updateListViewAndScore(['12oz, 4%', '16oz, 5%', '24oz, 4.5%']);
});

document.getElementById('wineButton').addEventListener('click', function() {
    updateListViewAndScore(['5oz, 12%', '6oz, 13%', '8oz, 14%']);
});

document.getElementById('cocktailButton').addEventListener('click', function() {
    updateListViewAndScore(['1.5oz, 40%', '2oz, 45%', '2.5oz, 50%']);
});

function updateListViewAndScore(options) {
    // Clear the list view
    listView.innerHTML = '';

    // Create a new list item for each option
    options.forEach(function(option) {
        var listItem = document.createElement('li');
        listItem.textContent = option;
        listView.appendChild(listItem);

        // Add an event listener to update the score when clicked
        listItem.addEventListener('click', function() {
            updateScore(option);
        });
    });
}

function updateScore(option) {
    // Update the score based on the selected option
    var size = parseInt(option.split(',')[0]);
    var strength = parseInt(option.split(',')[1]);
    var newScore = size * (strength / 100);
    score.textContent = 'Current Alcohol Count: ' + newScore;

    showToastNotification();
}

function showToastNotification() {
    var toastNotification = document.getElementById('toastNotification');
    toastNotification.style.display = 'block';
    setTimeout(function() {
        toastNotification.style.display = 'none';
    }, 3000);
}
