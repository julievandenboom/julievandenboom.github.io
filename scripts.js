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

// --- Progress Bar Animation ---
function progress_bar() {
    const progressBars = document.querySelectorAll('.ce_ixelgen_progress_bar .item_bar');
    
    progressBars.forEach(bar => {
        const progress = bar.querySelector('.progress');
        const targetWidth = progress.getAttribute('data-progress'); // Get progress from a custom data attribute
        
        if (targetWidth) {
            progress.style.width = targetWidth + '%';
        }
    });
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

