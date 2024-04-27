"use strict"
// Elements
const menuBtn = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const openBtn = document.querySelector(".hamburger-icon");
const closeBtn = document.querySelector(".close-icon");
const menu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
const navHeight = header.getBoundingClientRect().height;

const mobile = function () {
    menu.classList.add("hidden");
    // Open and close menu function
    function toggleMenu() {
        overlay.classList.toggle("hidden");
        overlay.style.top = (navHeight / 18) + 1 + "rem";
        openBtn.classList.toggle("hidden");
        closeBtn.classList.toggle("hidden");
        menu.classList.toggle("hidden");
    }
    // Add Event listener
    menuBtn.addEventListener("click", toggleMenu);
}

const desktop = function () {
    // console.log("desktop view");

    // Overlay and Intersection observer
    const stickyNav = function (entries) {
        const [entry] = entries;
        // console.log(entry);

        // if (!entry.isIntersecting) nav.classList.add('sticky');
        // else nav.classList.remove('sticky');
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
        root: null,
        threshold: 0,
        rootMargin: `-${navHeight}px`,
    });

    headerObserver.observe(header);
}

// Event Listener
window.addEventListener("load", () => {
    if (window.innerWidth <= 920) {
        mobile();
    } else {
        desktop();
    }
});
window.addEventListener("resize", () => {
    if (window.innerWidth <= 920) {
        mobile();
    } else {
        desktop();
    }
});