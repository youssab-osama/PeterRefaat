/**
 * Home Section - Algorithm Background
 * Simulates a Bubble Sort visualization for an algorithmic aesthetic
 */

class AlgorithmBackground {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.container = document.getElementById('algorithm-bg');
        
        if (!this.container) return;
        
        this.container.appendChild(this.canvas);
        
        this.bars = [];
        this.barCount = 100;
        this.color = '#aa00aa';
        
        this.resize();
        this.init();
        
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.init();
    }

    init() {
        this.bars = [];
        const spacing = this.width / this.barCount;
        for (let i = 0; i < this.barCount; i++) {
            this.bars.push({
                x: i * spacing,
                y: Math.random() * this.height * 0.5,
                width: spacing - 2,
                height: Math.random() * this.height * 0.4 + 20,
                active: false
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Very slow dummy sort simulation
        if (Math.random() > 0.9) {
            const idx1 = Math.floor(Math.random() * this.bars.length);
            const idx2 = Math.floor(Math.random() * this.bars.length);
            
            // Swap heights
            const temp = this.bars[idx1].height;
            this.bars[idx1].height = this.bars[idx2].height;
            this.bars[idx2].height = temp;
            
            this.bars[idx1].active = true;
            this.bars[idx2].active = true;
            
            setTimeout(() => {
                if (this.bars[idx1]) this.bars[idx1].active = false;
                if (this.bars[idx2]) this.bars[idx2].active = false;
            }, 500);
        }

        this.bars.forEach(bar => {
            this.ctx.fillStyle = bar.active ? '#ffaaf3' : 'rgba(170, 0, 170, 0.3)';
            this.ctx.fillRect(bar.x, this.height - bar.height, bar.width, bar.height);
        });

        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AlgorithmBackground();
});
