const carousel_Length = document.querySelectorAll(".cell").length - 1;
let current = 0;

const $carousel = document.querySelector("#carousel");
// const $nextButton = document.querySelector("#nextButton");

const nextEvent = () => {
    if (current !== carousel_Length) {
        $carousel.style.transform = `translateX(${(current + 1) * -500}px)`;
        current++;
    }
    else {
        current = 0;
        $carousel.style.transform = `translateX(0px)`;
    }
};

const autoSlide = setInterval(nextEvent, 3000);
// 2초마다 nextEvent 실행