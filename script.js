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
            '1': { 
                title: 'Olive guess house', 
                descHTML: "<p>Ce projet, réalisé dans le cadre d'un concours au Portugal, porte sur la conception d'une maison d'hôte nichée au cœur d'une oliveraie.</p><p>L'objectif principal est d'offrir aux visiteurs une expérience totalement immersive, en connexion directe avec le paysage environnant. Pour garantir un confort optimal, le projet met à l'honneur la terre crue, un matériau qui allie authenticité et bien-être.</p><p>L'ensemble de l'architecture fonctionne en créant une continuité fluide entre les espaces extérieurs et intérieurs. Le cœur du projet s'articule autour d'un vaste espace de séjour central, conçu pour être le plus chaleureux et confortable possible.</p>", 
                role: 'Concours', 
                collab: 'Rodrigue Bourdouch, Anthony Michalik, Théo Collignon',
                statut: 'Proposition de concours',
                loc: 'Portugal',
                img: 'images/Portugal_1.jpg',
                heroBgSize: 'contain',
                heroBgPosition: 'center',
                gallery: ['images/Portugal_5.png', 'images/Portugal_6.png', 'images/Portugal_7.png', 'images/Portugal_8.png', 'images/Portugal_9.jpg', 'images/Portugal_10.jpg', 'images/Portugal_2.png', 'images/Portugal_3.png', 'images/Portugal_4.jpg']
            },
            '2': { title: 'Rénovation Urbaine', desc: 'Transformation complète d\'une maison de maître typique.', role: 'Rénovation', statut: 'Achevé', peb: 'Label A+', loc: 'Bruxelles Environ', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
            '3': { title: 'Espace Minimaliste', desc: 'Aménagement intérieur épuré et optimisation de l\'espace.', role: 'Architecture d\'intérieur', statut: 'Achevé', peb: 'Label A+', loc: 'Liège', img: 'https://images.unsplash.com/photo-1502672260266-1c1c24240f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
            '4': { title: 'Espace Professionnel', desc: 'Conception de bureaux modernes et ergonomiques.', role: 'Conception globale', statut: 'En cours', peb: 'Label A', loc: 'Namur', img: 'https://images.unsplash.com/photo-1528909514045-2f4461f0fb98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' }
        };

        const proj = projects[projectId];
        if (proj) {
            document.title = proj.title + " - Thomas Jennen";
            document.getElementById('project-title').innerText = proj.title;
            const mainImg = document.getElementById('project-main-image');
            if(mainImg) {
                mainImg.src = proj.img;
            }
            
            const descContainer = document.getElementById('project-desc-container');
            if(descContainer) {
                if(proj.descHTML) {
                    descContainer.innerHTML = proj.descHTML;
                } else if(proj.desc) {
                    descContainer.innerHTML = `<p id="project-desc">${proj.desc}</p>`;
                }
            }

            const role = document.getElementById('project-role');
            if(role) role.innerText = proj.role || 'Mission d\'Architecture complète';

            const statut = document.getElementById('project-statut');
            if(statut) statut.innerText = proj.statut || 'Achevé';

            const loc = document.getElementById('project-loc');
            if(loc) loc.innerText = proj.loc || 'Belgique';

            const collabContainer = document.getElementById('meta-collab-container');
            if(proj.collab && collabContainer) {
                document.getElementById('project-collab').innerText = proj.collab;
                collabContainer.style.display = 'block';
            } else if(collabContainer) {
                collabContainer.style.display = 'none';
            }

            const pebContainer = document.getElementById('meta-peb-container');
            if(proj.peb && pebContainer) {
                document.getElementById('project-peb').innerText = proj.peb;
                pebContainer.style.display = 'block';
            } else if(pebContainer) {
                pebContainer.style.display = 'none';
            }

            if (proj.gallery) {
                const galleryContainer = document.querySelector('.project-gallery');
                if (galleryContainer) {
                    galleryContainer.innerHTML = '';
                    proj.gallery.forEach(imgSrc => {
                        const wrapper = document.createElement('div');
                        wrapper.className = 'gallery-item';
                        const img = document.createElement('img');
                        img.src = imgSrc;
                        img.alt = proj.title;
                        wrapper.appendChild(img);
                        galleryContainer.appendChild(wrapper);
                    });
                }
            }
        }
    }
});
