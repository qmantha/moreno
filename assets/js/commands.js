document.addEventListener("DOMContentLoaded", function () {
  const categories = [
    "server",
    "moderation",
    "information",
    "roleplay",
    "fun",
    "miscellaneous",
    "music",
    "voicemaster",
    "levels",
    "giveaways",
    "autorole",
    "economy",
    "crypto",
    "animals"
  ];
  let currentCategory = "all";

  // Update the count for each category
  function updateCategoryCounts() {
    let allCount = 0;

    categories.forEach((category) => {
      const count = document.querySelectorAll(`.command-card.${category}`).length;
      document.getElementById(`${category}-count`).textContent = count;
      allCount += count;
    });

    document.getElementById("all-count").textContent = allCount;
  }

  // Function to show commands by category
  function showCategory(category) {
    const allCards = Array.from(document.querySelectorAll(".command-card"));
    currentCategory = category;

    // Sort cards alphabetically
    const sortedCards = allCards.sort((a, b) => {
      const nameA = a.querySelector(".command-header").textContent.toLowerCase();
      const nameB = b.querySelector(".command-header").textContent.toLowerCase();
      return nameA.localeCompare(nameB);
    });

    // Display cards based on the selected category
    sortedCards.forEach((card) => {
      if (category === "all" || card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Update the active category button
    document.querySelectorAll(".category-btn").forEach((btn) => {
      btn.style.backgroundColor = "";
    });

    const activeButton = document.querySelector(`.category-btn[data-category="${category}"]`);
    if (activeButton) {
      activeButton.style.backgroundColor = "#5c5952";
    }
  }

  // Search functionality
  document.getElementById("search-input").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const allCards = document.querySelectorAll(".command-card");

    allCards.forEach((card) => {
      const commandName = card.querySelector(".command-header").textContent.toLowerCase();
      const description = card.querySelector(".command-description").textContent.toLowerCase();

      const isInCurrentCategory = currentCategory === "all" || card.classList.contains(currentCategory);

      if ((commandName.includes(query) || description.includes(query)) && isInCurrentCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  // Attach event listeners to category buttons
  document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const selectedCategory = e.target.getAttribute("data-category");
      showCategory(selectedCategory);
      document.getElementById("search-input").value = "";
    });
  });

  // Initialize counts and show all commands by default
  updateCategoryCounts();
  showCategory("all");
});