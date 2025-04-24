// JavaScript code extracted from the HTML file

// Example: Add your JavaScript logic here
console.log("JavaScript file linked successfully!");

// JavaScript code to toggle the mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});