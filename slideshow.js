/**********
Date: 09/1/2025
Author: J.Cole
Exercise: Campaign Slideshow (Randomized)
**********/
// GitHub-hosted images array
const githubImages = [
   const githubImages = [
    { url: "https://raw.githubusercontent.com/julievandenboom/julievandenboom.github.io/main/images/asigns.jpg", caption: "Campaign signs ready to go!" },
    { url: "https://raw.githubusercontent.com/julievandenboom/julievandenboom.github.io/main/images/parade.jpg", caption: "Marching in the Lansing parade" },
    { url: "https://raw.githubusercontent.com/julievandenboom/julievandenboom.github.io/main/images/canvassing.jpg", caption: "Canvassing in Lansing neighborhoods" },
    { url: "https://raw.githubusercontent.com/julievandenboom/julievandenboom.github.io/main/images/LaShawn.jpg", caption: "With LaShawn at a community event" },
    { url: "https://raw.githubusercontent.com/julievandenboom/julievandenboom.github.io/main/images/lugnuts.jpg", caption: "At the Lugnuts game" },
    { url: "https://raw.githubusercontent.com/julievandenboom/julievandenboom.github.io/main/images/olivia.jpg", caption: "With Olivia at a campaign stop" },
    { url: "https://raw.githubusercontent.com/julievandenboom/julievandenboom.github.io/main/images/photo1.jpg", caption: "Troll!" },
    { url: "https://raw.githubusercontent.com/julievandenboom/julievandenboom.github.io/main/images/photo2.jpg", caption: "Group Photo!" }
];

];

const slidesContainer = document.querySelector(".small-slideshow");
const dotsContainer = slidesContainer.nextElementSibling; // assumes dots container is right after slideshow
const slides = [];
const dots = [];

githubImages.forEach((imgObj, index) => {
    // Create slide
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide fade";
    slideDiv.innerHTML = `<img src="${imgObj.url}" alt="${imgObj.caption}"><div class="caption">${imgObj.caption}</div>`;
    slidesContainer.appendChild(slideDiv);
    slides.push(slideDiv);

    // Create dot
    const dotSpan = document.createElement("span");
    dotSpan.className = "dot";
    dotSpan.onclick = () => currentSlide(index + 1);
    dotsContainer.appendChild(dotSpan);
    dots.push(dotSpan);
});

let slideIndex = 1;

function showSlides(n) {
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Initialize
showSlides(slideIndex);

// Auto-slide every 5 seconds
setInterval(() => plusSlides(1), 5000);




