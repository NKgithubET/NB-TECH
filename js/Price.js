document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Set initial total price
    updateTotalPrice();

    // Checkbox and slider event listeners
    document.getElementById("basicCheckbox").addEventListener("change", updateTotalPrice);
    document.getElementById("pagesSlider").addEventListener("input", updateTotalPrice);
});

function updateTotalPrice() {
    // Get checkbox state and slider value
    const basicCheckbox = document.getElementById("basicCheckbox");
    const pagesSlider = document.getElementById("pagesSlider");
    const pagesCountDisplay = document.getElementById("pagesCount");

    // Update displayed number of pages
    pagesCountDisplay.textContent = pagesSlider.value;

    // Calculate total price
    const basicCost = basicCheckbox.checked ? 7000 : 0;
    const additionalPagesCost = pagesSlider.value * 1000; // Start counting from 0
    const totalPrice = basicCost + additionalPagesCost;

    // Update total price display
    document.getElementById("totalPrice").textContent = totalPrice;
}