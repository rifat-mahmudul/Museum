document.addEventListener("DOMContentLoaded", function () {
  // Get all sections and dots
  const sections = document.querySelectorAll('section[id^="section"]');
  const dots = document.querySelectorAll(".side-dots .dot");

  // Remove the active class from all dots initially
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  // Add active class to the first dot by default
  dots[0].classList.add("active");

  // Create an Intersection Observer to detect when sections are in view
  const observerOptions = {
    root: null, // viewport is the root
    rootMargin: "0px",
    threshold: 0.3, // section is considered in view when 30% is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Get the section id
        const id = entry.target.getAttribute("id");
        // Find the index of the section (extract the number from "section1", "section2", etc.)
        const index = parseInt(id.replace("section", "")) - 1;

        // Update active dot
        updateActiveDot(index);
      }
    });
  }, observerOptions);

  // Observe all sections
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Add click event listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();

      // Get the target section id from the href attribute
      const targetId = dot.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Scroll to the section
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Update active dot
      updateActiveDot(index);
    });
  });

  // Function to update the active dot
  function updateActiveDot(activeIndex) {
    // Remove active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    // Add active class to the current dot
    dots[activeIndex].classList.add("active");
  }
});
