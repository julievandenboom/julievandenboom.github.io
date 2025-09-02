document.addEventListener("DOMContentLoaded", () => {

    // --- Slideshow code (your existing code) ---
    const githubImages = [
        { url: "/images/asigns.jpg", caption: "Campaign signs ready to go!" },
        { url: "/images/parade.jpg", caption: "Marching in the Lansing parade" },
        { url: "/images/canvassing.jpg", caption: "Canvassing in Lansing neighborhoods" },
        { url: "/images/LaShawn.jpg", caption: "With LaShawn at a community event" },
        { url: "/images/lugnuts.jpg", caption: "At the Lugnuts game" },
        { url: "/images/olivia.jpg", caption: "With Olivia at a campaign stop" },
        { url: "/images/photo1.jpg", caption: "Troll!" },
        { url: "/images/photo2.jpg", caption: "Group Photo!" }
    ];

    const slidesContainer = document.querySelector(".small-slideshow");
    const dotsContainer = document.getElementById("slide-dots");

    if (slidesContainer && dotsContainer) {
        const slides = [];
        const dots = [];

        githubImages.forEach((imgObj, index) => {
            const slideDiv = document.createElement("div");
            slideDiv.className = "slide fade";
            slideDiv.innerHTML = `<img src="${imgObj.url}" alt="${imgObj.caption}"><div class="caption">${imgObj.caption}</div>`;
            slidesContainer.appendChild(slideDiv);
            slides.push(slideDiv);

            const dotSpan = document.createElement("span");
            dotSpan.className = "dot";
            dotSpan.onclick = () => currentSlide(index + 1);
            dotsContainer.appendChild(dotSpan);
            dots.push(dotSpan);
        });

        let slideIndex = 1;
        function showSlides(n) {
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;

            slides.forEach(slide => slide.style.display = "none");
            dots.forEach(dot => dot.classList.remove("active"));

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].classList.add("active");
        }

        function currentSlide(n) { showSlides(slideIndex = n); }
        function plusSlides(n) { showSlides(slideIndex += n); }

        showSlides(slideIndex);
        setInterval(() => plusSlides(1), 5000);
    }

    // --- Menu toggle code ---
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

});








