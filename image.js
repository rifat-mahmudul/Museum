document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const slides = document.querySelectorAll(".slide");

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Initialize button states
  updateButtonStates();

  // Previous button click handler
  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateGalleryPosition();
      updateButtonStates();
    }
  });

  // Next button click handler
  nextBtn.addEventListener("click", function () {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateGalleryPosition();
      updateButtonStates();
    }
  });

  // Update gallery position based on current index
  function updateGalleryPosition() {
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Update button states (disabled/enabled)
  function updateButtonStates() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalSlides - 1;
  }
});
