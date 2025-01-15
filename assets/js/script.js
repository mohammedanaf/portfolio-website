'use strict';

// Preloader
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})

// Add event listener on multiple elements
const addEventOnElements = function (elements, event, callback) {
    for (let i = 0, len = elements.length ; i < len ; i++) {
        elements[i].addEventListener(event, callback);
    }
}

// Navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

addEventOnElements(navTogglers, "click", function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
})

addEventOnElements(navLinks, "click", function() {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("nav-active");
})

// Active header
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
})
