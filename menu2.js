let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].classList.add('slide-left');

    setTimeout(() => {
        slides[slideIndex-1].classList.remove('slide-left');
    }, 1000); // 슬라이드 인 애니메이션 시간과 일치

    setTimeout(showSlides, 5000); // 5초마다 슬라이드를 변경합니다
}
