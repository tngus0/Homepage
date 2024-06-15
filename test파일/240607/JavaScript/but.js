
      const listContainers = document.querySelectorAll(".list-container");
      const toggleButtons = document.querySelectorAll('[id^="toggle-list"]');

      toggleButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
          const listContainer = listContainers[index];
          const isVisible = listContainer.style.display === "block";

         
          listContainers.forEach((container) => {
            container.style.display = "none";
          });

        
          listContainer.style.display = isVisible ? "none" : "block";
        });
      });
