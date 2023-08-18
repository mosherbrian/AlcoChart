
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.accordion-btn');
    let totalAlcoholIntake = 0;
    const alcoholTallyEl = document.getElementById('alcoholTally');

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
});
