// 1. GESTION DE LA DATE ET HEURE (Style Persona)
function updateDate() {
    const now = new Date();
    const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

    document.getElementById('p3-month').innerText = months[now.getMonth()];
    document.getElementById('p3-day').innerText = now.getDate();
    document.getElementById('p3-dayname').innerText = days[now.getDay()];
}
setInterval(updateDate, 1000);
updateDate();

// 2. ANIMATION AU SCROLL (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up, .slide-in').forEach((el) => {
    observer.observe(el);
});

// 3. OPTIONNEL: EFFET DE PARTICULES D'EAU (Background)
// Simple animation CSS/JS pour créer des bulles bleues qui montent
function createBubble() {
    const bubble = document.createElement('div');
    bubble.style.position = 'fixed';
    bubble.style.bottom = '-50px';
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.width = Math.random() * 20 + 10 + 'px';
    bubble.style.height = bubble.style.width;
    bubble.style.background = 'rgba(0, 240, 255, 0.2)';
    bubble.style.borderRadius = '50%';
    bubble.style.zIndex = '-1';
    bubble.style.animation = `floatUp ${Math.random() * 5 + 5}s linear`;
    
    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 10000);
}

// Ajouter l'animation CSS pour les bulles via JS
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes floatUp {
        0% { transform: translateY(0); opacity: 0; }
        10% { opacity: 0.5; }
        100% { transform: translateY(-100vh); opacity: 0; }
    }
`;
document.head.appendChild(styleSheet);

setInterval(createBubble, 800);