// --- Navigation Active Box Animation ---
const items = document.querySelectorAll(".item");
const activeBox = document.querySelector(".active-box");

// Function to reset the active box to the first menu item
function resetActiveBox() {
    const firstItem = items[0];
    activeBox.style.left = `${firstItem.offsetLeft}px`;
    activeBox.style.top = `${firstItem.offsetTop}px`;
    activeBox.style.width = `${firstItem.clientWidth}px`;
    activeBox.style.height = `${firstItem.clientHeight}px`;
}

// Initialize active box and update on window resize
resetActiveBox();
window.addEventListener("resize", resetActiveBox);

// Update active box position on mouseover for each menu item
items.forEach(elem => {
    elem.addEventListener("mouseover", () => {
        activeBox.style.left = `${elem.offsetLeft}px`;
        activeBox.style.top = `${elem.offsetTop}px`;
        activeBox.style.width = `${elem.clientWidth}px`;
        activeBox.style.height = `${elem.clientHeight}px`;
    });
});

// --- Card Toggle Function ---
function toggleCard(card) {
    // Close all other cards
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(c => {
        if (c !== card) {
            const content = c.querySelector('.card-content');
            content.style.display = "none";  // Close other cards
            c.classList.remove("active");
        }
    });

    // Toggle the clicked card
    card.classList.toggle("active");
    const content = card.querySelector('.card-content');
    content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
}

// --- DOMContentLoaded Initialization ---
document.addEventListener('DOMContentLoaded', function () {
    // Menu toggle for mobile
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    menuIcon.addEventListener('click', () => navLinks.classList.toggle('active'));

    // Set up IntersectionObserver to trigger progress bar animation when in view
    const progressSection = document.querySelector('.ce_ixelgen_progress_bar');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progress_bar();
                observer.unobserve(entry.target); // Stop observing after triggering
            }
        });
    }, { threshold: 0.5 });
    observer.observe(progressSection);

    // Set up event listeners for card toggling
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function () {
            toggleCard(card);
        });
    });
});

// jQuery ready function to trigger the progress bar animation
$(document).ready(function () {
    progress_bar();
});

function progress_bar() {
    var speed = 30;
    var max_value = 5000;
    var items = $('.progress_bar').find('.progress_bar_item');

    items.each(function () {
        var item = $(this).find('.progress');
        var itemValue = item.data('progress');

        // Ensure itemValue does not exceed max_value
        itemValue = Math.min(itemValue, max_value);

        var i = 0;
        var value = $(this);

        var count = setInterval(function () {
            if (i <= itemValue) {
                var iStr = i.toString();
                var percentageStr = ((i / max_value) * 100).toFixed(2) + '%';
                item.css({
                    'width': percentageStr
                });
                value.find('.item_value').html(iStr + ' (' + percentageStr + ')');
            }
            else {
                clearInterval(count);
            }
            i++;
        }, speed);
    });
}

// Function to update the progress bar and values dynamically
function updateProgressBar() {
    // Get the progress bar element and its data attributes
    const progressBar = document.querySelector('.progress');
    const itemValue = document.querySelector('.item_value');

    // Retrieve data-doors and data-progress from HTML
    const doorsKnocked = itemValue.getAttribute('data-doors');
    const progressPercent = itemValue.getAttribute('data-progress');

    // Set the width of the progress bar dynamically based on progress
    progressBar.style.width = progressPercent + '%';

    // Update the text in item_value to display the doors and percentage
    itemValue.textContent = `${doorsKnocked} (${progressPercent}%)`;
}

// Call the updateProgressBar function on page load
document.addEventListener('DOMContentLoaded', updateProgressBar);
