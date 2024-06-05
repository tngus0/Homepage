const womanCarousel_Length = document.querySelectorAll(".womanMenuCell").length - 1;
let womanMenuCurrent = 0;

const WomanMenuCarousel = document.querySelector("#womanCarousel");
// const $nextButton = document.querySelector("#nextButton");

const womanMenuNextEvent = () => {
    if (womanMenuCurrent !== womanCarousel_Length) {
        WomanMenuCarousel.style.transform = `translateX(${(womanMenuCurrent + 1) * -15}vw)`;
        womanMenuCurrent++;
    }
    else {
        womanMenuCurrent = 0;
        WomanMenuCarousel.style.transform = `translateX(0vw)`;
    }
};

const womanMenuSlide = setInterval(womanMenuNextEvent, 2000);
// 2초마다 nextEvent 실행