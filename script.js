// Toggle Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Change Navbar background on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation using Intersection Observer
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        entry.target.classList.add('active');
        // Stop observing once revealed
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// For dummy projects data loading in project.html
// This will parse the URL params to get the ID and optionally modify the DOM.
document.addEventListener('DOMContentLoaded', () => {
    // Basic setup if we are on the project page
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId && document.getElementById('project-title')) {
        // Quick dummy mapping for demo purposes
        const projects = {
            '1': { title: 'Villa Contemporaine', desc: 'Nouvelle construction intégrée à son environnement naturel.', role: 'Architecte complet', img: 'https://images.unsplash.com/photo-1613490901591-ce5840924905?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
            '2': { title: 'Rénovation Urbaine', desc: 'Transformation complète d\'une maison de maître typique.', role: 'Rénovation & PEB', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
            '3': { title: 'Espace Minimaliste', desc: 'Aménagement intérieur épuré et optimisation de l\'espace.', role: 'Architecture d\'intérieur', img: 'https://images.unsplash.com/photo-1502672260266-1c1c24240f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
            '4': { title: 'Espace Professionnel', desc: 'Conception de bureaux modernes et ergonomiques.', role: 'Conception globale', img: 'https://images.unsplash.com/photo-1528909514045-2f4461f0fb98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' }
        };

        const proj = projects[projectId];
        if (proj) {
            document.title = proj.title + " - Thomas Jennen";
            document.getElementById('project-title').innerText = proj.title;
            const hero = document.getElementById('project-hero');
            if(hero) hero.style.backgroundImage = `url('${proj.img}')`;
            
            const desc = document.getElementById('project-desc');
            if(desc) desc.innerText = proj.desc;

            const role = document.getElementById('project-role');
            if(role) role.innerText = proj.role;
        }
    }
});
