document.addEventListener("DOMContentLoaded", function () {
  // Get all slides
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".side-dots .dot");
  let currentSlide = 0;
  let slideInterval;

  // Initialize the carousel
  function initCarousel() {
    // Set the first slide as active
    slides[0].classList.add("active");
    dots[0].classList.add("active");

    // Start the automatic slideshow
    startSlideshow();

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        goToSlide(index);
        resetInterval();
      });
    });
  }

  // Go to a specific slide
  function goToSlide(index) {
    // Remove active class from current slide and dot
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    // Update current slide index
    currentSlide = index;

    // If we've gone beyond the last slide, go back to the first
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    // If we've gone before the first slide, go to the last
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    // Add active class to new current slide and dot
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  // Go to the next slide
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  // Start the automatic slideshow
  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }

  // Reset the interval when manually changing slides
  function resetInterval() {
    clearInterval(slideInterval);
    startSlideshow();
  }

  // Initialize the carousel
  initCarousel();
});

//scrolling color change
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll(".nav-links a");
  const searchBtn = document.querySelector(".search-btn");
  const menuBtn = document.querySelector(".menu-btn");
  const museumName = document.querySelector(".museum-name");
  const languageSelector = document.querySelector(".language-selector-fixed");

  // Function to handle scroll
  function handleScroll() {
    // Get the height of the viewport
    const viewportHeight = window.innerHeight;

    // Get current scroll position
    const scrollPosition = window.scrollY;

    // Check if we've scrolled past the hero section (adjust the threshold as needed)
    if (scrollPosition > viewportHeight * 0.8) {
      // Add scrolled class to elements
      header.classList.add("scrolled");
      museumName.classList.add("scrolled");
      languageSelector.classList.add("scrolled");
    } else {
      // Remove scrolled class from elements
      header.classList.remove("scrolled");
      museumName.classList.remove("scrolled");
      languageSelector.classList.remove("scrolled");
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Call once on page load to set initial state
  handleScroll();
});

//hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const menuBtn = document.querySelector(".menu-btn");
  const closeMenuBtn = document.querySelector(".close-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const body = document.body;

  // Function to open menu
  function openMenu() {
    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");
    body.classList.add("menu-open");
  }

  // Function to close menu
  function closeMenu() {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    body.classList.remove("menu-open");
  }

  // Event listeners
  menuBtn.addEventListener("click", openMenu);
  closeMenuBtn.addEventListener("click", closeMenu);
  menuOverlay.addEventListener("click", closeMenu);

  // Close menu when clicking on a menu link (optional)
  const menuLinks = document.querySelectorAll(".mobile-menu-links a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu on escape key press
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Handle window resize (optional)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      closeMenu();
    }
  });
});
