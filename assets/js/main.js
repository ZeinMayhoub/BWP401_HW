// -----------------------------------------------------------
// Filter Logic: 1. Based On Category
// -----------------------------------------------------------
const eventCards = document.querySelectorAll("#events-grid > [data-category]");

const filterBtn = document.querySelectorAll("[data-filter]");

filterBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Know Selected Category
    const selectedCategory = btn.dataset.filter;

    // Map Each Button To Category Param
    const url = new URL(window.location.href);

    if (url.searchParams.get("category") !== selectedCategory) {
      url.searchParams.set("category", selectedCategory);
      window.history.pushState({}, "", url);
    }

    // Filter Cards Based On Selected Category
    eventCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      if (selectedCategory === "all" || selectedCategory === cardCategory) {
        // Apply Filter On Cards
        card.classList.remove("d-none");
      } else {
        card.classList.add("d-none");
      }
    });

    // Filter Buttons Style Based On Click Event
    filterBtn.forEach((filterButton) => {
      const isActive = filterButton === btn;

      filterButton.classList.toggle("btn-primary", isActive);
      filterButton.classList.toggle("btn-outline-primary", !isActive);

      filterButton.setAttribute("aria-pressed", String(isActive));
    });
  });
});

// Read category from URL when page loads
const params = new URLSearchParams(window.location.search);
const categoryFromURL = params.get("category");

// Find the matching category button
const initialButton = Array.from(filterBtn).find(
  (btn) => btn.dataset.filter === categoryFromURL,
);

// Apply the category filter
if (initialButton) {
  initialButton.click();
}

// -----------------------------------------------------------
// Filter Logic: 2. Based On Search Value
// -----------------------------------------------------------

const searchInput = document.querySelector("#event-search");

// Apply Search While Typing
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.trim().toLowerCase();

  eventCards.forEach((card) => {
    const cardText = card.textContent.toLowerCase();

    const matchSearch = cardText.includes(searchText);

    card.classList.toggle("d-none", !matchSearch);
  });
});

// -----------------------------------------------------------
// Filter Logic: 3. Based On Date
// -----------------------------------------------------------

// Get Date Input
const sortSelect = document.querySelector("#event-sort");

sortSelect.addEventListener("change", () => {
  const selectedDate = sortSelect.value;

  // Get Array From Cards In Order To Sort It
  const cardsArray = Array.from(eventCards);

  cardsArray.sort((cardA, cardB) => {
    const dateA = new Date(cardA.dataset.date);
    const dateB = new Date(cardB.dataset.date);

    if (selectedDate === "asc") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  // Rearrange Cards Into Events Grid
  const eventsGrid = document.querySelector("#events-grid");

  cardsArray.forEach((card) => {
    eventsGrid.appendChild(card);
  });
});

// -----------------------------------------------------------
// Filter Logic: 4. Based On Location
// -----------------------------------------------------------

// Get Select Input
const locationSelect = document.querySelector("#event-location");

locationSelect.addEventListener("change", () => {
  const selectedLocation = locationSelect.value;

  eventCards.forEach((card) => {
    const cardLocation = card.dataset.location;

    const matchesLocation =
      selectedLocation === "" || selectedLocation === cardLocation;

    card.classList.toggle("d-none", !matchesLocation);
  });
});