function selectRandomMenu() {
    const menus = document.querySelectorAll('.menu-item');
    const randomIndex = Math.floor(Math.random() * menus.length);
    const randomMenu = menus[randomIndex];

    // 모든 메뉴의 크기를 원래 크기로 되돌리기
    menus.forEach(menu => {
        menu.classList.remove('selected-menu');
    });

    // 랜덤으로 선택된 메뉴의 크기를 키우기
    randomMenu.classList.add('selected-menu');

    // 5초 후에 선택된 메뉴의 크기를 원래 크기로 되돌리기
    setTimeout(() => {
        randomMenu.classList.remove('selected-menu');
    }, 3000); // 3초 후에 제자리
}
