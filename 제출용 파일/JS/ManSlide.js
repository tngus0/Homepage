const manCarousel_Length = document.querySelectorAll(".manMenuCell").length - 1;
let ManMenuCurrent = 0;

const menuCarousel = document.querySelector("#manCarousel");
// const $nextButton = document.querySelector("#nextButton");

const manMenuNextEvent = () => {
    if (ManMenuCurrent !== manCarousel_Length) {
        menuCarousel.style.transform = `translateX(${(ManMenuCurrent + 1) * -15}vw)`;
        ManMenuCurrent++;
    }
    else {
        ManMenuCurrent = 0;
        menuCarousel.style.transform = `translateX(0vw)`;
    }
};

const manMenuSlide = setInterval(manMenuNextEvent, 2000);
// 2초마다 nextEvent 실행