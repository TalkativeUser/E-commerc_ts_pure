"use strict";
// src/main.ts
// Selectors with explicit casting
const carousel = document.querySelector('.carousel');
const innerCarousel = document.querySelector(".innerCarousel");
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');
// State tracking
let currentIndex = 0;
const totalSlides = slides.length;
const widthOfCarousel = carousel === null || carousel === void 0 ? void 0 : carousel.offsetWidth;
const slidesPerView = 2; // Matches your w-1/2 class
const singleSlideWidth = widthOfCarousel && widthOfCarousel / 2;
if (leftArrow && rightArrow) {
    leftArrow.addEventListener("click", (e) => {
        if (innerCarousel && singleSlideWidth) {
            if (currentIndex > 0) {
                currentIndex--;
                innerCarousel.style.transform = `translateX(-${singleSlideWidth * currentIndex}px)`;
                innerCarousel.style.transition = "transform 0.5s ease-in-out";
            }
        }
    });
    rightArrow.addEventListener("click", (e) => {
        if (innerCarousel && singleSlideWidth) {
            if (currentIndex < totalSlides - 2) {
                currentIndex++;
                innerCarousel.style.transform = `translateX(-${singleSlideWidth * currentIndex}px)`;
                innerCarousel.style.transition = "transform 0.5s ease-in-out";
            }
        }
    });
}
//# sourceMappingURL=main.js.map