const recommendButton = document.getElementById('recommendButton');
const recommendBox = document.getElementById('recommendBox');
const recommendedMenu = document.getElementById('recommendedMenu');
const menuTypeBtns = document.querySelectorAll('.menu-type-btn');

const koreanMenus = ['솥밥', '비빔밥', '제육덮밥', '김치볶음밥', '김치찌개', '된장찌개', '소고기 전골', '미역국', '콩나물국', '삼겹살', '한우', '갈비찜', '돼지갈비', '족발'];
const japaneseMenus = ['소바', '우동', '라멘', '규동', '가츠동', '달걀초밥', '후토마끼', '나베', '스키야키', '가라아게', '텐푸라', '돈카츠', '멘치카츠', '쿠시카츠'];
const chineseMenus = ['짜장면', '짬뽕', '우육면', '탄탄면', '울면', '탕수육', '청경채볶음', '동파육', '마파두부', '북경요리', '볶음밥', '훠궈', '마라탄', '삼선볶음밥', '잡채밥'];
const westernMenus = ['스테이크', '라따뚜이', '샐러드', '리조또', '오믈랫', '파스타', '샌드위치', '바게트', '피자', '햄버거'];
const snackMenus = ['떡볶이', '떡꼬치', '오뎅', '라볶이', '닭꼬치', '잔치국수', '라면', '야채튀김', '오징어튀김', '쫄면', '김밥', '순대', '덮밥', '볶음밥', '오므라이스'];

function getRandomMenu(menuType) {
    switch (menuType) {
        case 'korean':
            return koreanMenus[Math.floor(Math.random() * koreanMenus.length)];
        case 'japanese':
            return japaneseMenus[Math.floor(Math.random() * japaneseMenus.length)];
        case 'chinese':
            return chineseMenus[Math.floor(Math.random() * chineseMenus.length)];
        case 'western':
            return westernMenus[Math.floor(Math.random() * westernMenus.length)];
        case 'snack':
            return snackMenus[Math.floor(Math.random() * snackMenus.length)];
        default:
            return '';
    }
}

recommendButton.addEventListener('click', () => {
    if (recommendBox.style.display === 'none') {
        recommendBox.style.display = 'block';
    } else {
        recommendBox.style.display = 'none';
    }
});

menuTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const menuType = btn.dataset.menuType;
        const randomMenu = getRandomMenu(menuType);
        recommendedMenu.textContent = randomMenu;
        recommendBox.style.display = 'block';
    });
});

recommendBox.addEventListener('click', (e) => {
    if (e.target === recommendBox) {
        recommendBox.style.display = 'none';
    }
});
