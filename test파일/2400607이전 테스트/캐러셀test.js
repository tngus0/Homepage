const carousel_Length = document.querySelectorAll(".cell").length - 1;
let current = 0;

const $carousel = document.querySelector("#carousel");
const $preButton = document.querySelector("#preButton");
const $nextButton = document.querySelector("#nextButton");

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

const preEvent = () => {
    if (current !== 0) {
        current--;
        $carousel.style.transform = `translateX(${current * -500}px)`;
    }
    else {
        current = carousel_Length;
        $carousel.style.transform = `translateX(${carousel_Length * -500}px)`;
    }
};

$nextButton.addEventListener("click", nextEvent);
$preButton.addEventListener("click", preEvent);
// 2초마다 nextEvent 실행