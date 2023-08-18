
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.accordion-btn');
    let totalAlcoholIntake = 0;
    const alcoholTallyEl = document.getElementById('alcoholTally');
    const customOuncesInput = document.querySelector('.content input[type="number"]:nth-child(1)');
    const customPercentageInput = document.querySelector('.content input[type="number"]:nth-child(2)');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            this.classList.toggle('active');

            if (content) {
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            }

            // Check if the clicked button is a final selection (Alcohol Percentage)
            if (this.nextElementSibling && this.nextElementSibling.tagName !== "DIV") {
                const parentContent = this.parentElement;
                const grandParentContent = parentContent.parentElement;

                const drinkSize = parseFloat(parentContent.previousElementSibling.textContent.replace('oz', ''));
                const alcoholPercentage = parseFloat(this.textContent.replace('%', ''));

                totalAlcoholIntake += drinkSize * alcoholPercentage;
                alcoholTallyEl.textContent = Math.round(totalAlcoholIntake); // Display as a whole number

                // Show toast notification
                const toast = document.getElementById('toast');
                toast.style.display = 'block';
                setTimeout(() => toast.style.display = 'none', 2000);

                // Close accordion menu
                grandParentContent.style.display = 'none';
                parentContent.style.display = 'none';
                this.style.display = 'none';
            }
        });
    });

    // Add event listeners to the custom drink input fields
    [customOuncesInput, customPercentageInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const drinkSize = parseFloat(customOuncesInput.value);
                const alcoholPercentage = parseFloat(customPercentageInput.value);

                totalAlcoholIntake += drinkSize * (alcoholPercentage / 100);
                alcoholTallyEl.textContent = Math.round(totalAlcoholIntake); // Display as a whole number

                // Show toast notification
                const toast = document.getElementById('toast');
                toast.style.display = 'block';
                setTimeout(() => toast.style.display = 'none', 2000);

                // Clear input fields
                customOuncesInput.value = '';
                customPercentageInput.value = '';
            }
        });
    });
});
