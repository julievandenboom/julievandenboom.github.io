/**********
Date: 09/1/2025
Author: J.Cole
Exercise: Campaign Slideshow (Randomized)
**********/
let slideIndex = 1;

// GitHub-hosted images array
const githubImages = [
    { url: "https://raw.githubusercontent.com/username/julie-campaign/main/images/asigns.jpg", caption: "Campaign signs ready to go!" },
    { url: "https://raw.githubusercontent.com/username/julie-campaign/main/images/parade.jpg", caption: "Marching in the Lansing parade" },
    { url: "https://raw.githubusercontent.com/username/julie-campaign/main/images/canvassing.jpg", caption: "Canvassing in Lansing neighborhoods" },
    { url: "https://raw.githubusercontent.com/username/julie-campaign/main/images/LaShawn.jpg", caption: "With LaShawn at a community event" },
    { url: "https://raw.githubusercontent.com/username/julie-campaign/main/images/lugnuts.jpg", caption: "At the Lugnuts game" },
    { url: "https://raw.githubusercontent.com/username/julie-campaign/main/images/olivia.jpg", caption: "With Olivia at a campaign stop" },
    { url: "https://raw.githubusercontent.com/username/julie-campaign/main/images/photo1.jpg", caption: "Troll!" },
    { url: "https://raw.githubusercontent.com/username/julie-campaign/main/images/photo2.jpg", caption: "Group Photo!" }
];

const slidesContainer = document.querySelector(".small-slideshow");
const dotsContainer = slidesContainer.querySelector("div[style*='text-align:center']");

// Create slides and dots dynamically
const slides = [];
const dots = [];

githubImages.forEach((imgObj, index) => {
    // Create slide
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide fade";
    slideDiv.innerHTML = `<img src="${imgObj.url}" alt="${imgObj.caption}"><div class="caption">${imgObj.caption}</div>`;
    slidesContainer.insertBefore(slideDiv, dotsContainer);
    slides.push(slideDiv);

    // Create dot
    const dotSpan = document.createElement("span");
    dotSpan.className = "dot";
    dotSpan.onclick = () => currentSlide(index + 1);
    dotsContainer.appendChild(dotSpan);
    dots.push(dotSpan);
});

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
    shuffledSlides.forEach(slide => slidesContainer.insertBefore(slide, dotsContainer));
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

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Initialize
randomizeSlides();
showSlides(slideIndex);

// Optional: auto-slide every 5 seconds
setInterval(() => plusSlides(1), 5000);


