// Animación simple al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Aplicar a las tarjetas y secciones
    const elements = document.querySelectorAll('.card, .love-story, .gallery');
    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });
});

const musicBtn = document.getElementById('musicBtn');
const audio = document.getElementById('backgroundMusic');
const icon = musicBtn.querySelector('i');

musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        icon.classList.replace('fa-play', 'fa-pause');
        musicBtn.style.background = "var(--primary-purple)";
        musicBtn.style.color = "white";
    } else {
        audio.pause();
        icon.classList.replace('fa-pause', 'fa-play');
        musicBtn.style.background = "transparent";
        musicBtn.style.color = "var(--primary-purple)";
    }
});