// src/main.ts


// Selectors with explicit casting
const carousel = document.querySelector('.carousel') as HTMLDivElement | null;
const innerCarousel = document.querySelector(".innerCarousel") as HTMLDivElement | null;
const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLDivElement>;
const leftArrow = document.querySelector('.leftArrow') as HTMLDivElement | null;
const rightArrow = document.querySelector('.rightArrow') as HTMLDivElement | null;
const dots=document.querySelectorAll('.dot') as NodeListOf<HTMLDivElement> ;

// State tracking
let currentIndex: number = 0;
const totalSlides: number = slides.length;
const widthOfCarousel: number | undefined = carousel?.offsetWidth
const slidesPerView: number = 2;
const singleSlideWidth: number | undefined = widthOfCarousel && widthOfCarousel / 2

function snapToLeft() {
  if (innerCarousel && singleSlideWidth) {
    if (currentIndex > 0) {

      currentIndex--
      innerCarousel.style.transform = `translateX(-${singleSlideWidth * currentIndex}px)`;
      innerCarousel.style.transition = "transform 0.5s ease-in-out";

    }
  }

}
function snapToRight() {
  if (innerCarousel && singleSlideWidth) {

    if (currentIndex < totalSlides - 2) {

      currentIndex++
      innerCarousel.style.transform = `translateX(-${singleSlideWidth * currentIndex}px)`;
      innerCarousel.style.transition = "transform 0.5s ease-in-out";

    }
  }


}

if (leftArrow && rightArrow) {

  leftArrow.addEventListener("click", snapToLeft)

  rightArrow.addEventListener("click", snapToRight)

}


let isDragging = false;
let startMouseX = 0;
let startInnerCarouselX = 0;
let mouseMoveDistance: number = 0
const maxIndex = totalSlides - slidesPerView
const dotsCount = maxIndex + 1


carousel?.addEventListener("mousedown", (e: MouseEvent) => {
  e.preventDefault();
  if (!innerCarousel) return;

  isDragging = true;

  // مكان الماوس وقت البداية
  startMouseX = e.pageX;

  // مكان الكاروسيل وقت البداية
  // const matrix = new DOMMatrixReadOnly(
  //   window.getComputedStyle(innerCarousel).transform
  // );
  startInnerCarouselX = -singleSlideWidth! * currentIndex;
  innerCarousel.style.transition = "none";
});

window.addEventListener("mousemove", (e: MouseEvent) => {
  if (!isDragging || !innerCarousel) return;

  const currentMouseX = e.pageX;
  mouseMoveDistance = currentMouseX - startMouseX;

  innerCarousel.style.transform = `translateX(${startInnerCarouselX + mouseMoveDistance}px)`;
});

window.addEventListener("mouseup", () => {
  if (!innerCarousel) return;


  isDragging = false;
  if (singleSlideWidth) {


    const threshold = singleSlideWidth! / 2;

    innerCarousel.style.transition = "transform 0.4s ease";

    if (Math.abs(mouseMoveDistance) < threshold) {
      // رجوع لنفس السلايد
      innerCarousel.style.transform =
        `translateX(-${singleSlideWidth * currentIndex}px)`;

    } else if (mouseMoveDistance > 0) {
      // سحب يمين
      if (currentIndex > 0) {
        currentIndex--;
      }
      innerCarousel.style.transform =
        `translateX(-${singleSlideWidth * currentIndex}px)`;


    } else {
      // سحب شمال
      if (currentIndex < totalSlides - slidesPerView) {
        currentIndex++;
      }

      innerCarousel.style.transform =
        `translateX(-${singleSlideWidth! * currentIndex}px)`;
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
    if (!innerCarousel || !singleSlideWidth) return;

    currentIndex = idx;
    innerCarousel.style.transform =
      `translateX(-${singleSlideWidth * currentIndex}px)`;
  });
});

 

export function renderTemplate(
  templateId: string,
  targetId: string
) {
  const template = document.getElementById(templateId) as HTMLTemplateElement;
  const target = document.getElementById(targetId);

  if (!template || !target) return;

  const clone = template.content.cloneNode(true);
  target.appendChild(clone);
}
