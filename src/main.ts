// src/main.ts


// Selectors with explicit casting
const carousel = document.querySelector('.carousel') as HTMLDivElement | null;
const innerCarousel =document.querySelector(".innerCarousel") as HTMLDivElement | null;
const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLDivElement>;
const leftArrow = document.querySelector('.leftArrow') as HTMLDivElement | null;
const rightArrow = document.querySelector('.rightArrow') as HTMLDivElement | null;

// State tracking
let currentIndex: number = 0;
const totalSlides: number = slides.length;
const widthOfCarousel:number|undefined =carousel?.offsetWidth 
const slidesPerView: number = 2; // Matches your w-1/2 class
const singleSlideWidth:number | undefined =widthOfCarousel&&widthOfCarousel  / 2

if(leftArrow&&rightArrow) {

  leftArrow.addEventListener("click", (e )=>{
     
    if(innerCarousel&&singleSlideWidth) {
      if(currentIndex>0) {

        currentIndex--
        innerCarousel.style.transform = `translateX(-${singleSlideWidth*currentIndex }px)`;
        innerCarousel.style.transition = "transform 0.5s ease-in-out";
      }
    }
  } )
  
  rightArrow.addEventListener("click", (e)=>{

    
    if(innerCarousel&&singleSlideWidth) {

      if(currentIndex<totalSlides-2) {

        currentIndex++
        innerCarousel.style.transform = `translateX(-${singleSlideWidth*currentIndex }px)`;
        innerCarousel.style.transition = "transform 0.5s ease-in-out";
      }
    }
    

  } )

}
