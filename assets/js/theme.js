const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Apply Theme
function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  html.setAttribute("data-bs-theme", theme);

  themeToggle.checked = theme === "dark";

  localStorage.setItem("theme", theme);
}

// Load Saved Theme
const savedTheme = localStorage.getItem("theme") || "light";

setTheme(savedTheme);

// Toggle Theme
themeToggle.addEventListener("change", () => {
  const selectedTheme = themeToggle.checked ? "dark" : "light";

  setTheme(selectedTheme);
});
