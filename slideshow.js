/**********
Date: 09/1/2025
Author: J.Cole
Exercise: Campaign Slideshow (Randomized)
**********/

let slideIndex = 1;
const slidesContainer = document.querySelector(".small-slideshow");
const slides = Array.from(slidesContainer.querySelectorAll(".slide"));
const dotsContainer = slidesContainer.querySelector("div[style*='text-align:center']");
const dots = Array.from(dotsContainer.querySelectorAll(".dot"));

// Shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Randomize slides on load
function randomizeSlides() {
    const shuffledSlides = shuffleArray(slides);
    shuffledSlides.forEach(slide => slidesContainer.appendChild(slide));
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main slideshow function
function showSlides(n) {
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Remove 'active' class from all dots
    dots.forEach(dot => dot.classList.remove("active"));

    // Show the current slide and activate corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Initialize
randomizeSlides();
showSlides(slideIndex);

// Optional: auto-slide every 5 seconds
setInterval(() => {
    plusSlides(1);
}, 5000);

