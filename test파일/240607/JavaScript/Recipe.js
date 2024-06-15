document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll(".categories li");

    categories.forEach(category => {
        const dropdown = category.querySelector(".dropdown");
        const items = dropdown.querySelectorAll("li");

        category.addEventListener("mouseenter", function() {
            dropdown.style.display = "block";
        });

        category.addEventListener("mouseleave", function() {
            dropdown.style.display = "none";
            category.classList.remove("hovered"); // 부모 요소의 hovered 클래스 제거
        });

        items.forEach(item => {
            item.addEventListener("mouseenter", function() {
                category.classList.add("hovered"); // 부모 요소에 hovered 클래스 추가
            });
            item.addEventListener("mouseleave", function() {
                category.classList.remove("hovered"); // 부모 요소의 hovered 클래스 제거
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const dropdownItems = document.querySelectorAll(".dropdown li");

    dropdownItems.forEach(item => {
        item.addEventListener("click", function(event) {
            // 클릭된 항목의 하이퍼링크 가져오기
            const link = item.querySelector("a").getAttribute("href");
            // 새 창에서 해당 링크로 이동
            window.open(link, "_blank");
        });
    });
});




























