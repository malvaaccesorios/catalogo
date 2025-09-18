document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');

    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentSlide = 0;

    const moveToSlide = (track, currentSlide) => {
        track.style.transform = 'translateX(-' + currentSlide * slideWidth + 'px)';
    };

    // Al hacer clic en el botón siguiente
    nextButton.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; // Regresa al principio si ya estás al final
        }
        moveToSlide(track, currentSlide);
    });

    // Al hacer clic en el botón anterior
    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = slides.length - 1; // Mueve al final si ya estás al principio
        }
        moveToSlide(track, currentSlide);
    });
// Deslizamiento automático
const autoSlideInterval = 3000; // 3000 milisegundos = 3 segundos
let slideTimer;

const startAutoSlide = () => {
    slideTimer = setInterval(() => {
        // Mueve al siguiente slide, o regresa al inicio
        if (currentSlide < slides.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        moveToSlide(track, currentSlide);
    }, autoSlideInterval);
};

// Reinicia el temporizador cuando el usuario interactúa
const resetAutoSlide = () => {
    clearInterval(slideTimer);
    startAutoSlide();
};

// Inicia el carrusel automático
startAutoSlide();

// Puedes agregar esto a tus botones para que no interrumpa el movimiento
nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Regresa al principio si ya estás al final
    }
    moveToSlide(track, currentSlide);
    resetAutoSlide(); // Reinicia el temporizador
});

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1; // Mueve al final si ya estás al principio
    }
    moveToSlide(track, currentSlide);
    resetAutoSlide(); // Reinicia el temporizador
});
