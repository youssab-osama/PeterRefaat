/**
 * Main JS - Core Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Header Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.75rem 0';
            header.style.background = 'rgba(19, 19, 19, 0.92)';
        } else {
            header.style.padding = '1.25rem 0';
            header.style.background = 'rgba(28, 27, 27, 0.6)';
        }
        updateActiveNavLink();
    });

    // Active nav-link tracking (highlight current section)
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);

            if (navLink) {
                if (scrollPos >= top && scrollPos < bottom) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    // Mobile Menu Sidebar Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        // Open
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.add('sidebar-active');
        });

        // Close via exit button
        if (closeMenuBtn) {
            closeMenuBtn.addEventListener('click', () => {
                navLinks.classList.remove('sidebar-active');
            });
        }

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('sidebar-active') &&
                !navLinks.contains(e.target)) {
                navLinks.classList.remove('sidebar-active');
            }
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('sidebar-active');
            });
        });
    }

    // Intersection Observer for scroll-reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe reveal elements — run after dynamic content is rendered
    function observeElements() {
        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    }

    setTimeout(observeElements, 500);

    // Run once on load to set initial active link
    updateActiveNavLink();
});
