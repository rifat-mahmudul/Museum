document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const videoContainer = document.querySelector(".vid-container");
    const videoCards = document.querySelectorAll(".vid-card");
    const prevBtn = document.querySelector(".vid-nav-btn.vid-prev");
    const nextBtn = document.querySelector(".vid-nav-btn.vid-next");
    
    // Variables for carousel
    let currentPosition = 0;
    const cardWidth = videoCards[0].offsetWidth;
    const cardMargin = 16; // Gap between cards
    const totalWidth = cardWidth + cardMargin;
    const containerWidth = videoContainer.clientWidth;
    const cardsPerView = Math.floor(containerWidth / totalWidth);
    const maxPosition = videoCards.length - cardsPerView;
    
    // Initialize
    updateCarouselPosition();
    
    // Previous button click
    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        if (currentPosition > 0) {
          currentPosition--;
          updateCarouselPosition();
        }
      });
    }
    
    // Next button click
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        if (currentPosition < maxPosition) {
          currentPosition++;
          updateCarouselPosition();
        }
      });
    }
    
    // Function to update carousel position
    function updateCarouselPosition() {
      const translateX = -currentPosition * totalWidth;
      videoContainer.style.transform = `translateX(${translateX}px)`;
      
      // Update button states
      if (prevBtn) {
        prevBtn.disabled = currentPosition === 0;
        prevBtn.style.opacity = currentPosition === 0 ? "0.5" : "1";
      }
      
      if (nextBtn) {
        nextBtn.disabled = currentPosition >= maxPosition;
        nextBtn.style.opacity = currentPosition >= maxPosition ? "0.5" : "1";
      }
    }
    
    // Handle window resize
    window.addEventListener("resize", function() {
      // Recalculate values
      const newContainerWidth = videoContainer.clientWidth;
      const newCardsPerView = Math.floor(newContainerWidth / totalWidth);
      const newMaxPosition = videoCards.length - newCardsPerView;
      
      // Adjust position if needed
      if (currentPosition > newMaxPosition) {
        currentPosition = Math.max(0, newMaxPosition);
      }
      
      // Update carousel
      updateCarouselPosition();
    });
    
    // Add click events to video cards
    videoCards.forEach((card) => {
      card.addEventListener("click", function () {
        const videoTag = this.querySelector(".vid-tag").textContent;
        console.log(`Playing video: ${videoTag}`);
  
        // In a real implementation, you would open a video player or modal here
        alert(`Playing video: ${videoTag}`);
      });
  
      // Add hover effect
      card.addEventListener("mouseenter", function () {
        this.querySelector(".vid-play-button").style.opacity = "1";
      });
  
      card.addEventListener("mouseleave", function () {
        this.querySelector(".vid-play-button").style.opacity = "0";
      });
    });
    
    // Optional: Add touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    videoContainer.addEventListener("touchstart", function(e) {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    videoContainer.addEventListener("touchend", function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
    
    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - go next
        if (currentPosition < maxPosition) {
          currentPosition++;
          updateCarouselPosition();
        }
      } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - go prev
        if (currentPosition > 0) {
          currentPosition--;
          updateCarouselPosition();
        }
      }
    }
  });