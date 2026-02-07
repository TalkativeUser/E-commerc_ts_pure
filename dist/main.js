"use strict";
// src/main.ts
// Selectors with explicit casting
const carousel = document.querySelector('.carousel');
const innerCarousel = document.querySelector(".innerCarousel");
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');
const dots = document.querySelectorAll('.dot');
// State tracking
let currentIndex = 0;
const totalSlides = slides.length;
const widthOfCarousel = carousel === null || carousel === void 0 ? void 0 : carousel.offsetWidth;
const slidesPerView = 2;
const singleSlideWidth = widthOfCarousel && widthOfCarousel / 2;
function snapToLeft() {
    if (innerCarousel && singleSlideWidth) {
        if (currentIndex > 0) {
            currentIndex--;
            innerCarousel.style.transform = `translateX(-${singleSlideWidth * currentIndex}px)`;
            innerCarousel.style.transition = "transform 0.5s ease-in-out";
        }
    }
}
function snapToRight() {
    if (innerCarousel && singleSlideWidth) {
        if (currentIndex < totalSlides - 2) {
            currentIndex++;
            innerCarousel.style.transform = `translateX(-${singleSlideWidth * currentIndex}px)`;
            innerCarousel.style.transition = "transform 0.5s ease-in-out";
        }
    }
}
if (leftArrow && rightArrow) {
    leftArrow.addEventListener("click", snapToLeft);
    rightArrow.addEventListener("click", snapToRight);
}
let isDragging = false;
let startMouseX = 0;
let startInnerCarouselX = 0;
let mouseMoveDistance = 0;
const maxIndex = totalSlides - slidesPerView;
const dotsCount = maxIndex + 1;
carousel === null || carousel === void 0 ? void 0 : carousel.addEventListener("mousedown", (e) => {
    e.preventDefault();
    if (!innerCarousel)
        return;
    isDragging = true;
    // مكان الماوس وقت البداية
    startMouseX = e.pageX;
    // مكان الكاروسيل وقت البداية
    // const matrix = new DOMMatrixReadOnly(
    //   window.getComputedStyle(innerCarousel).transform
    // );
    startInnerCarouselX = -singleSlideWidth * currentIndex;
    innerCarousel.style.transition = "none";
});
window.addEventListener("mousemove", (e) => {
    if (!isDragging || !innerCarousel)
        return;
    const currentMouseX = e.pageX;
    mouseMoveDistance = currentMouseX - startMouseX;
    innerCarousel.style.transform = `translateX(${startInnerCarouselX + mouseMoveDistance}px)`;
});
window.addEventListener("mouseup", () => {
    if (!innerCarousel)
        return;
    isDragging = false;
    if (singleSlideWidth) {
        const threshold = singleSlideWidth / 2;
        innerCarousel.style.transition = "transform 0.4s ease";
        if (Math.abs(mouseMoveDistance) < threshold) {
            // رجوع لنفس السلايد
            innerCarousel.style.transform =
                `translateX(-${singleSlideWidth * currentIndex}px)`;
        }
        else if (mouseMoveDistance > 0) {
            // سحب يمين
            if (currentIndex > 0) {
                currentIndex--;
            }
            innerCarousel.style.transform =
                `translateX(-${singleSlideWidth * currentIndex}px)`;
        }
        else {
            // سحب شمال
            if (currentIndex < totalSlides - slidesPerView) {
                currentIndex++;
            }
            innerCarousel.style.transform =
                `translateX(-${singleSlideWidth * currentIndex}px)`;
        }
    }
    mouseMoveDistance = 0;
});
window.addEventListener("mouseleave", () => {
    isDragging = false;
});
window.addEventListener("blur", () => {
    isDragging = false;
});
dots.forEach((dot, idx) => {
    if (idx > maxIndex) {
        dot.remove();
        return;
    }
    dot.addEventListener("click", () => {
        if (!innerCarousel || !singleSlideWidth)
            return;
        currentIndex = idx;
        innerCarousel.style.transform =
            `translateX(-${singleSlideWidth * currentIndex}px)`;
    });
});
const state = document.querySelector("app-state");
// قراءة
if (state) {
    console.log(state.dataset.step);
    // كتابة
    state.dataset.step = "3";
    state.dataset.container = "modal";
}
//# sourceMappingURL=main.js.map