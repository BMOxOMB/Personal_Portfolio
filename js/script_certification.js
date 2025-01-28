let currentIndex = 0; // Index of visible items
const carousel = document.querySelector('.carousel');
const badgeCount = document.querySelectorAll('.badge').length; 
const visibleCount = 4.3; // Number of visible badges at a time

// Logic to scroll carousel
function moveCarousel(direction) {
  const maxIndex = Math.max(badgeCount - visibleCount, 0); // Prevent scrolling too far

  // Adjust the index in bounds
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  // Apply the transform to slide the carousel visually
  const translateDistance = -currentIndex * (160 + 10); // Badge size + margin
  carousel.style.transform = `translateX(${translateDistance}px)`;
}
