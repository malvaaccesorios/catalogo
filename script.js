document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    
    // Si necesitas botones para el carrusel, quita los comentarios de estas líneas
    // const nextButton = document.querySelector('.next-btn');
    // const prevButton = document.querySelector('.prev-btn');

    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentSlide = 0;

    const moveToSlide = (track, currentSlide) => {
        track.style.transform = 'translateX(-' + currentSlide * slideWidth + 'px)';
    };

    // Deslizamiento automático
    const autoSlideInterval = 3000; // 3000 milisegundos = 3 segundos
    let slideTimer;

    const startAutoSlide = () => {
        slideTimer = setInterval(() => {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
            moveToSlide(track, currentSlide);
        }, autoSlideInterval);
    };

    const resetAutoSlide = () => {
        clearInterval(slideTimer);
        startAutoSlide();
    };

    startAutoSlide();
});
