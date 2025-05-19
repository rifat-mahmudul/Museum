const swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 500
});

// Custom navigation
document.querySelector('.nav-prev').addEventListener('click', () => {
    swiper.slidePrev();
});

document.querySelector('.nav-next').addEventListener('click', () => {
    swiper.slideNext();
});