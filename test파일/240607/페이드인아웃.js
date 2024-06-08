document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    let current = 0;

    const showNextImage = () => {
        // Remove active class from the current image
        cells[current].classList.remove("active");

        // Update the current index
        current = (current + 1) % cells.length;

        // Add active class to the next image
        cells[current].classList.add("active");
    };

    // Set initial active image
    cells[current].classList.add("active");

    // Change image every 3 seconds
    const autoSlide = setInterval(showNextImage, 5000);
});
