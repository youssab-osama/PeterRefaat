/**
 * Main JS — Core Interactivity
 * Handles: icons, header scroll shrink, mobile sidebar, active nav, scroll reveal
 */

document.addEventListener('DOMContentLoaded', () => {
    // ── Lucide Icons ─────────────────────────────────────────────────────────
    if (window.lucide) window.lucide.createIcons();

    // ── Dynamic Footer Year ──────────────────────────────────────────────────
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ── Header: shrink + tighten on scroll ────────────────────────────────────
    const header = document.getElementById('main-header');

    function onScroll() {
        const scrolled = window.scrollY > 50;
        header.style.padding  = scrolled ? '0.75rem 0' : '1.25rem 0';
        header.style.background = scrolled
            ? 'rgba(19, 19, 19, 0.92)'
            : 'rgba(28, 27, 27, 0.6)';
        highlightActiveSection();
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // ── Active nav-link: highlight the section currently in view ─────────────
    function highlightActiveSection() {
        const scrollPos = window.scrollY + 100;
        document.querySelectorAll('section[id]').forEach(section => {
            const top    = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const link   = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            if (link) link.classList.toggle('active', scrollPos >= top && scrollPos < bottom);
        });
    }

    // Run once on load so the correct link is already highlighted
    highlightActiveSection();

    // ── Mobile sidebar ────────────────────────────────────────────────────────
    const menuBtn   = document.querySelector('.mobile-menu-btn');
    const closeBtn  = document.getElementById('close-menu');
    const navLinks  = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        const openSidebar  = ()  => navLinks.classList.add('sidebar-active');
        const closeSidebar = ()  => navLinks.classList.remove('sidebar-active');

        menuBtn.addEventListener('click',  (e) => { e.stopPropagation(); openSidebar(); });
        closeBtn?.addEventListener('click', closeSidebar);

        // Close when clicking outside the sidebar
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('sidebar-active') && !navLinks.contains(e.target)) {
                closeSidebar();
            }
        });

        // Close when any nav link is clicked
        navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeSidebar));
    }

    // ── Scroll-reveal (IntersectionObserver) ──────────────────────────────────
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Wait briefly so dynamically-rendered section content exists in the DOM
    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }, 500);
});
