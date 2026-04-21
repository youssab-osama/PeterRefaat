/**
 * Projects Section - Data and Rendering
 */

// Inline SVGs for icons that must render inside dynamic innerHTML
// (Lucide's createIcons() doesn't reliably process data-lucide inside innerHTML strings)
const GITHUB_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
  <path d="M9 18c-4.51 2-5-2-7-2"/>
</svg>`;

const CODE2_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="opacity:0.55;color:var(--primary);filter:drop-shadow(0 0 10px rgba(255,170,243,0.4));animation:float 3s ease-in-out infinite">
  <polyline points="16 18 22 12 16 6"/>
  <polyline points="8 6 2 12 8 18"/>
</svg>`;

const projectsData = [
    {
        title: "FCIS Operating System (FOS)",
        description: "Implemented dynamic memory allocation, kernel heap management, page fault handling, and priority-based CPU scheduling.",
        tags: ["C", "Assembly", "OS Kernel", "Memory Management", "Algorithms"],
        github: "https://github.com/Peter-Refaat/FOS-OS",
        icon: "layout"
    },
    {
        title: "Image Segmentation",
        description: "Graph-based segmentation using disjoint set union (union-find) and Kruskal's MST for region merging with 8-connected neighborhoods.",
        tags: ["C++", "Dijkstra", "Algorithm Design", "Graph Theory", "Optimization"],
        github: "https://github.com/Peter-Refaat/Image-Segmentation",
        icon: "image"
    },
    {
        title: "Mini-Wasalny",
        description: "Qt desktop application for visualizing graph algorithms (DFS, BFS, Dijkstra, Floyd-Warshall) with real-time color highlighting.",
        tags: ["C++", "Qt", "Graph Visualization", "UI Design", "Algorithms"],
        github: "https://github.com/Peter-Refaat/Mini-Wasalny",
        icon: "map-pin"
    },
    {
        title: "Watch-It",
        description: "Full-stack Java application simulating streaming platform functionality with user/admin roles and DP-based search logic.",
        tags: ["Java", "JavaFX", "Dynamic Programming", "Full-stack", "UX Design"],
        github: "https://github.com/Peter-Refaat/Watch-IT",
        icon: "play-circle"
    }
];

function buildProjectCard(project) {
    const div = document.createElement('div');
    div.className = 'project-card reveal';
    div.innerHTML = `
        <div class="project-image">
            <i data-lucide="${project.icon}"></i>
        </div>
        <div class="project-info">
            <h3 class="font-heading">${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">&lt;${tag}&gt;</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="btn btn-primary project-repo-btn">
                    ${GITHUB_SVG}
                    Repository
                </a>
            </div>
        </div>
    `;
    return div;
}

function buildViewMoreCard() {
    const div = document.createElement('div');
    div.className = 'project-card project-card--view-more reveal';
    div.innerHTML = `
        <div class="project-image project-image--code">
            <canvas class="mini-code-canvas"></canvas>
            <div class="view-more-overlay">
                ${CODE2_SVG}
            </div>
        </div>
        <div class="project-info">
            <h3 class="font-heading">View More</h3>
            <p>Explore the full collection of projects, experiments, and competitive programming solutions on GitHub.</p>
            <div class="project-tags">
                <span class="tag">&lt;Algorithms&gt;</span>
                <span class="tag">&lt;Open Source&gt;</span>
                <span class="tag">&lt;CP&gt;</span>
            </div>
            <div class="project-links">
                <a href="https://github.com/Peter-Refaat" target="_blank" class="btn btn-primary project-repo-btn">
                    ${GITHUB_SVG}
                    GitHub Profile
                </a>
            </div>
        </div>
    `;
    return div;
}

function initMiniCodeCanvas(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth || 320;
    canvas.height = canvas.offsetHeight || 200;

    const snippets = ['01', '{}', '<>', '//', '[]', '##', '&&', '||', '=>', '::'];
    const particles = [];
    for (let i = 0; i < 24; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            text: snippets[Math.floor(Math.random() * snippets.length)],
            speed: 0.3 + Math.random() * 0.7,
            opacity: 0.15 + Math.random() * 0.4,
            size: 10 + Math.random() * 8
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.font = `${p.size}px 'Space Grotesk', monospace`;
            ctx.fillStyle = `rgba(255, 170, 243, ${p.opacity})`;
            ctx.fillText(p.text, p.x, p.y);
            p.y += p.speed;
            if (p.y > canvas.height) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
                p.text = snippets[Math.floor(Math.random() * snippets.length)];
            }
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function initProjects() {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;

    projectsData.forEach(project => {
        grid.appendChild(buildProjectCard(project));
    });

    const viewMoreCard = buildViewMoreCard();
    grid.appendChild(viewMoreCard);

    // Render Lucide icons for the card image area icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Init mini canvas for "View More" card after layout settles
    setTimeout(() => {
        const miniCanvas = grid.querySelector('.mini-code-canvas');
        if (miniCanvas) initMiniCodeCanvas(miniCanvas);
        // Re-render icons once more after DOM settles
        if (window.lucide) window.lucide.createIcons();
    }, 150);
}

document.addEventListener('DOMContentLoaded', initProjects);
