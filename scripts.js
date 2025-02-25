const items = document.querySelectorAll(".item");
const activeBox = document.querySelector(".active-box");
let distanceLeft, distanceTop, elemWidth, elemHeight;

(function reset() {
    activeBox.style.left = `${items[0].offsetLeft}px`;
    activeBox.style.top = `${items[0].offsetTop}px`;
    activeBox.style.width = `${items[0].clientWidth}px`;
    activeBox.style.height = `${items[0].clientHeight}px`;
})();

items.forEach((elem) => {
    elem.addEventListener("mouseover", (e) => {
        distanceLeft = elem.offsetLeft;
        distanceTop = elem.offsetTop;
        elemWidth = elem.clientWidth;
        elemHeight = elem.clientHeight;

        activeBox.style.width = `${elemWidth}px`;
        activeBox.style.height = `${elemHeight}px`;
        activeBox.style.left = `${distanceLeft}px`;
        activeBox.style.top = `${distanceTop}px`;
    });
});

window.addEventListener("resize", reset);

function toggleCard(card) {
    card.classList.toggle("active");
    var content = card.querySelector('.card-content');
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

