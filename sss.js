function toggleList(num) {
    var list = document.getElementById("myList" + num);
    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
}