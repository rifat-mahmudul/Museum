document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuBtn = document.querySelector(".menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      alert("Menu clicked! Add your mobile menu implementation here.");
    });
  }

  // Search button functionality
  const searchBtn = document.querySelector(".search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      alert("Search clicked! Add your search implementation here.");
    });
  }

  // Side dots navigation
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      // Remove active class from all dots
      dots.forEach((d) => d.classList.remove("active"));
      // Add active class to clicked dot
      this.classList.add("active");

      // Here you would typically implement slide/section navigation
      console.log(`Navigating to slide ${index + 1}`);
    });
  });

  // Parallax effect for hero image
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector(".hero");

    if (hero) {
      // Move the background image slightly as user scrolls
      hero.style.backgroundPosition = `center ${50 + scrollPosition * 0.05}%`;
    }
  });

  // Fade in animation for hero content
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    setTimeout(() => {
      heroContent.style.opacity = "1";
    }, 300);
  }
});
