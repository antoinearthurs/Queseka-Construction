// Initialize ScrollReveal
ScrollReveal().reveal('.container', {
    delay: 200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 150
});

// JavaScript for Slider in Renovations Section
var divisor = document.getElementById("divisor");
var slider = document.getElementById("slider");

function moveDivisor() {
    divisor.style.width = slider.value + "%";
}
