document.addEventListener("DOMContentLoaded", () => {
  // Create Image Viewer
  const viewer = document.createElement("div");

  viewer.className = "image-viewer";

  viewer.innerHTML = `
    <button
      class="image-viewer-close"
      type="button"
      aria-label="إغلاق"
    >
      &times;
    </button>

    <img src="" alt="">
  `;

  document.body.appendChild(viewer);

  const viewerImage = viewer.querySelector("img");
  const closeBtn = viewer.querySelector(".image-viewer-close");

  // Open Image
  document.addEventListener("click", (event) => {
    const clickedImage = event.target.closest("img");

    if (!clickedImage || viewer.contains(clickedImage)) {
      return;
    }

    event.preventDefault();

    viewerImage.src = clickedImage.currentSrc || clickedImage.src;
    viewerImage.alt = clickedImage.alt;

    viewer.classList.add("show");
    document.body.classList.add("image-viewer-open");
  });

  // Close Image Viewer
  function closeViewer() {
    viewer.classList.remove("show");
    document.body.classList.remove("image-viewer-open");
  }

  // Close Button
  closeBtn.addEventListener("click", closeViewer);

  // Click Outside Image
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) {
      closeViewer();
    }
  });

  // Close With Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeViewer();
    }
  });
});
