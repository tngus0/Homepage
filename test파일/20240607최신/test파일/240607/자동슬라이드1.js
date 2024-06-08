const carousel_Length = document.querySelectorAll(".cell").length;
let current = 0;

const $carousel = document.querySelector("#carousel");

const nextEvent = () => {
    current++;
    if (current >= carousel_Length) {
        current = 0;
    }
    $carousel.style.transform = `translateX(${current * -1920}px)`;
};

const autoSlide = setInterval(nextEvent, 3000);
