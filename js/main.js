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
            header.style.background = 'rgba(19, 19, 19, 0.9)';
        } else {
            header.style.padding = '1.25rem 0';
            header.style.background = 'rgba(53, 53, 52, 0.4)';
        }
    });

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

    // Intersection Observer for animations
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

    // Initial check for reveal elements
    function observeElements() {
        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    }

    // Small delay to ensure dynamic content is loaded
    setTimeout(observeElements, 500);
});
