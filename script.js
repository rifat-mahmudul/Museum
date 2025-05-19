// Add this to a new file (e.g., navigation.js) or include in your existing JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Get all dots
  const dots = document.querySelectorAll('.side-dots .dot');
  const sections = document.querySelectorAll('section[id^="section"]');
  
  // Function to update active dot based on section ID
  function updateActiveDot(sectionId) {
    // Get the index from the section ID (e.g., "section1" -> 0)
    const index = parseInt(sectionId.replace('section', '')) - 1;
    
    if (index >= 0 && index < dots.length) {
      // Remove active class and reset styles for all dots
      dots.forEach(dot => {
        dot.classList.remove('active');
        dot.style.backgroundColor = '';
        dot.style.transform = '';
      });
      
      // Add active class and apply styles to the current dot
      dots[index].classList.add('active');
      dots[index].style.backgroundColor = '#fff';
      dots[index].style.transform = 'scale(1.2)';
    }
  }
  
  // Handle hash change (when URL changes)
  window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1); // Remove the # character
    if (hash) {
      updateActiveDot(hash);
    }
  });
  
  // Handle click events on dots
  dots.forEach(dot => {
    dot.addEventListener('click', function(e) {
      // Let the default behavior happen (navigate to the hash)
      // but also update the active dot immediately
      const targetId = this.getAttribute('href').substring(1); // Remove the # character
      updateActiveDot(targetId);
    });
  });
  
  // Handle scroll events to update hash when scrolling
  let isScrolling = false;
  window.addEventListener('scroll', function() {
    if (!isScrolling) {
      isScrolling = true;
      
      // Use requestAnimationFrame to limit scroll event handling
      window.requestAnimationFrame(function() {
        const scrollPosition = window.scrollY;
        
        // Find which section is currently in view
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop - 200 && 
              scrollPosition < sectionTop + sectionHeight - 200) {
            // Update URL hash without triggering a scroll
            const sectionId = section.id;
            if (window.location.hash !== `#${sectionId}`) {
              history.replaceState(null, null, `#${sectionId}`);
              updateActiveDot(sectionId);
            }
            break;
          }
        }
        
        isScrolling = false;
      });
    }
  });
  
  // Initialize - set active dot based on initial hash or first section
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    updateActiveDot(hash);
  } else {
    // Default to first section if no hash
    updateActiveDot('section1');
  }
});