const track = document.getElementById('featured-track');
const nextBtn = document.getElementById('featured-next');
const prevBtn = document.getElementById('featured-prev');
const slides = Array.from(track.children);

// 1. Create clones
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

// 2. Append/Prepend clones to track
track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

// 3. Setup index tracking
let currentIndex = 1; // Start at 1 because index 0 is now the lastClone
const slideWidth = 100; // Moving by percentages (100% per slide)

// Move slider to initial position (Slide 1) without animation
track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

// Flag to prevent spam-clicking while transitioning
let isTransitioning = false;

// Function to handle slide movement
function moveToSlide(index, hasTransition = true) {
  if (hasTransition) {
    toggleAutoSlide(true)
    track.style.transition = 'transform 0.8s ease-in-out';
  } else {
    track.style.transition = 'none';
  }
  track.style.transform = `translateX(-${index * slideWidth}%)`;
}

// Next Button Click
const goNext = () => {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex++;
  moveToSlide(currentIndex);
};
nextBtn.addEventListener('click', goNext);


// Prev Button Click
const goPrev = () => {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex--;
  moveToSlide(currentIndex);
};

prevBtn.addEventListener('click', goPrev);

// 4. Handle Loop Reset on Transition End
track.addEventListener('transitionend', () => {
  isTransitioning = false;
  const updatedSlides = track.children;

  // If we arrived at the First Clone (at the very end) -> Jump instantly to Slide 1
  if (updatedSlides[currentIndex] === firstClone) {
    currentIndex = 1;
    moveToSlide(currentIndex, false);
  }
  
  // If we arrived at the Last Clone (at the very beginning) -> Jump instantly to Slide 3
  if (updatedSlides[currentIndex] === lastClone) {
    currentIndex = updatedSlides.length - 2;
    moveToSlide(currentIndex, false);
  }
});

// Auto Slide
let interval;
function toggleAutoSlide(shouldRun) {
  if (shouldRun) {
    clearInterval(interval);

    interval = setInterval(goNext, 5000);
  } else {
    clearInterval(interval);
  }
}

toggleAutoSlide(true);

track.addEventListener("mouseenter", () => {
  toggleAutoSlide(false);
});
track.addEventListener("mouseleave", () => {
  toggleAutoSlide(true);
});