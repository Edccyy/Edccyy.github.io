// 1. Date discrète (en haut à droite)
function updateDate() {
    const now = new Date();
    const days = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set('p3-dayname', days[now.getDay()]);
    set('p3-day', String(now.getDate()).padStart(2, '0'));
    set('p3-month', String(now.getMonth() + 1).padStart(2, '0'));
}
updateDate();
setInterval(updateDate, 60000);

// 2. Apparition au scroll
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

// 3. Lien actif dans la navigation
const sections = [...document.querySelectorAll('section[id]')];
const navLinks = [...document.querySelectorAll('.nav-item')];

function syncNav() {
    let current = sections[0] ? sections[0].id : '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - window.innerHeight * 0.45) current = sec.id;
    });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', syncNav, { passive: true });
syncNav();
