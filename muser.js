document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.carousel-card');
    const prevButton = document.querySelector('.carousel-nav.prev');
    const nextButton = document.querySelector('.carousel-nav.next');
    
    // Variables
    let currentIndex = 0;
    let cardWidth = cards[0].offsetWidth;
    let cardsPerView = getCardsPerView();
    let maxIndex = Math.max(0, cards.length - cardsPerView);
    
    // Initialize
    updateCarousel();
    
    // Event Listeners
    window.addEventListener('resize', function() {
        cardWidth = cards[0].offsetWidth;
        cardsPerView = getCardsPerView();
        maxIndex = Math.max(0, cards.length - cardsPerView);
        updateCarousel();
    });
    
    // Navigation buttons
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            navigate(-1);
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            navigate(1);
        });
    }
    
    // Touch/Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    track.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - go next
            navigate(1);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - go prev
            navigate(-1);
        }
    }
    
    // Functions
    function navigate(direction) {
        currentIndex = Math.max(0, Math.min(currentIndex + direction, maxIndex));
        updateCarousel();
    }
    
    function updateCarousel() {
        // Update track position
        const gap = 20; // Same as in CSS
        const offset = currentIndex * (cardWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;
        
        // Update button states
        if (prevButton) {
            prevButton.disabled = currentIndex === 0;
        }
        if (nextButton) {
            nextButton.disabled = currentIndex >= maxIndex;
        }
        
        // Note: The original code was trying to update dots, but there are no dots in the HTML
        // If you want to add dots, you'll need to add them to your HTML first
    }
    
    function getCardsPerView() {
        const viewportWidth = window.innerWidth;
        
        if (viewportWidth >= 1200) {
            return 4; // 4 cards per view on large screens
        } else if (viewportWidth >= 992) {
            return 3; // 3 cards per view on medium screens
        } else if (viewportWidth >= 768) {
            return 2; // 2 cards per view on small screens
        } else {
            return 1; // 1 card per view on mobile
        }
    }
});