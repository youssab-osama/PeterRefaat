// Canvas Animation for Algorithm Metaphors
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.createElement("canvas");
    canvas.id = "algoCanvas";
    Object.assign(canvas.style, {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "0",
        pointerEvents: "none",
        opacity: "0.4"
    });
    
    const heroSection = document.getElementById("home");
    if (heroSection) {
        heroSection.insertBefore(canvas, heroSection.firstChild);
    } else {
        return;
    }

    const ctx = canvas.getContext("2d");
    let particles = [];
    let width, height;

    // Graphic Elements representing algorithms
    const shapes = ['node', 'array', 'bracket_open', 'bracket_close', 'dp_table', 'pointer'];

    function resize() {
        width = canvas.width = heroSection.offsetWidth;
        height = canvas.height = heroSection.offsetHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 1.5;
            this.vy = (Math.random() - 0.5) * 1.5;
            this.type = shapes[Math.floor(Math.random() * shapes.length)];
            this.size = Math.random() * 15 + 10;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.05;
            const primaryColor = "rgba(170, 0, 170, 0.6)"; // Match expert violet
            const accentColor = "rgba(255, 107, 255, 0.5)"; // Match text-gradient
            this.color = Math.random() > 0.5 ? primaryColor : accentColor;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.rotation += this.rotSpeed;

            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            
            ctx.font = "bold 20px 'Space Grotesk'";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            switch(this.type) {
                case 'node':
                    ctx.beginPath();
                    ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.fill();
                    break;
                case 'array':
                    ctx.strokeRect(-this.size, -this.size/3, this.size*2, this.size/1.5);
                    ctx.beginPath();
                    ctx.moveTo(-this.size/3, -this.size/3);
                    ctx.lineTo(-this.size/3, this.size/3);
                    ctx.moveTo(this.size/3, -this.size/3);
                    ctx.lineTo(this.size/3, this.size/3);
                    ctx.stroke();
                    break;
                case 'bracket_open':
                    ctx.fillText("{", 0, 0);
                    break;
                case 'bracket_close':
                    ctx.fillText("}", 0, 0);
                    break;
                case 'dp_table':
                    ctx.strokeRect(-this.size/1.5, -this.size/1.5, this.size*1.3, this.size*1.3);
                    ctx.beginPath();
                    ctx.moveTo(0, -this.size/1.5); ctx.lineTo(0, this.size/1.5);
                    ctx.moveTo(-this.size/1.5, 0); ctx.lineTo(this.size/1.5, 0);
                    ctx.stroke();
                    break;
                case 'pointer':
                    ctx.fillText("*ptr", 0, 0);
                    break;
            }

            ctx.restore();
        }
    }

    for(let i = 0; i < 40; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Draw connections between nodes
            if (particles[i].type === 'node') {
                for (let j = i + 1; j < particles.length; j++) {
                    if (particles[j].type === 'node') {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < 150) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(170, 0, 170, ${1 - dist/150})`;
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
});
