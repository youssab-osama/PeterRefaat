/**
 * Flying code background animation
 * Renders code symbols drifting across the full-page background canvas
 */

(function () {
    const canvas = document.getElementById('code-rain-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const SYMBOLS = [
        '{}', '()', '[]', '=>', '//', '/*', '*/', '&&', '||', '!=',
        '==', '++', '--', '<<', '>>', '::', '%%', '##', '01', '10',
        'if', 'fn', 'for', 'let', 'var', 'new', 'try', 'ret',
        'O(n)', 'O(1)', 'O(log n)', 'Σ', 'Δ', 'λ', 'π', '∞',
        '<T>', 'null', 'void', 'int', 'bool', 'true', 'else'
    ];

    let W, H;
    let particles = [];

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * W,
            y: Math.random() * H - H,
            text: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
            size: 10 + Math.random() * 8,
            speed: 0.25 + Math.random() * 0.6,
            opacity: 0.04 + Math.random() * 0.09,
            drift: (Math.random() - 0.5) * 0.15,
            hue: Math.random() < 0.6
                ? `rgba(255, 170, 243,` // primary pink
                : `rgba(100, 180, 255,` // blue accent
        };
    }

    function initParticles() {
        particles = [];
        const count = Math.floor((W * H) / 14000);
        for (let i = 0; i < count; i++) {
            const p = createParticle();
            p.y = Math.random() * H; // start spread throughout
            particles.push(p);
        }
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);

        particles.forEach(p => {
            ctx.font = `${p.size}px 'Space Grotesk', 'Courier New', monospace`;
            ctx.fillStyle = `${p.hue}${p.opacity})`;
            ctx.fillText(p.text, p.x, p.y);

            p.y += p.speed;
            p.x += p.drift;

            if (p.y > H + 30) {
                Object.assign(p, createParticle());
                p.y = -20;
            }
        });

        requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();

    window.addEventListener('resize', () => {
        resize();
        initParticles();
    });
})();
