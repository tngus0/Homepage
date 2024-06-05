// hometestslide.js
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index === (currentSlide + 1) % slides.length) {
                slide.classList.add('next');
            } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
                slide.classList.add('previous');
            } else {
                slide.classList.remove('active', 'next', 'previous');
            }
        });
        currentSlide = (currentSlide + 1) % slides.length;
    }

    showSlide();

    setInterval(showSlide, 3000);
});
