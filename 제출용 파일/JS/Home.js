//hometest.js
document.addEventListener('DOMContentLoaded', function() {
    const rankImages = [
        "/이미지/배경7_1.jpg",
        "/이미지/배경7_1.jpg",
        "/이미지/배경7_1.jpg",
        "/이미지/배경7_1.jpg",
        "/이미지/배경7_1.jpg",
        "/이미지/배경7_1.jpg",
        "/이미지/배경7_1.jpg",
        "/이미지/배경7_1.jpg",
        "/이미지/배경7_1.jpg",
        "/이미지/배경7_1.jpg"
    ];

    function createRankList(containerId) {
        const container = document.getElementById(containerId);
        rankImages.forEach(src => {
            const div = document.createElement('div');
            div.className = 'RankItem';
            const img = document.createElement('img');
            img.src = src;
            div.appendChild(img);
            container.appendChild(div);
        });
    }

    createRankList('ManRank');
    createRankList('WomanRank');

    createRankList('ManRank');
    createRankList('WomanRank');

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // 슬라이드를 표시하는 함수
    function showSlide() {
        // 현재 슬라이드를 보이지 않게 하고
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        // 다음 슬라이드를 보이게 함
        slides[currentSlide].style.display = 'block';
        // 다음 슬라이드로 이동
        currentSlide = (currentSlide + 1) % slides.length;
    }

    // 페이지 로드 후 바로 슬라이드 표시
    showSlide();

    // 3초마다 슬라이드를 변경
    setInterval(showSlide, 3000);

});
