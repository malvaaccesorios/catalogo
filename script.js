document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.dataset.animation;
                
                element.classList.add('animated', animationType, 'is-visible');
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    const animatableElements = document.querySelectorAll('[data-animation]');
    animatableElements.forEach(element => {
        observer.observe(element);
    });
});
