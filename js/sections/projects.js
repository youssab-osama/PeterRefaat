/**
 * Projects Section - Data and Rendering
 */

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

function initProjects() {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;

    projectsData.forEach(project => {
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
                    <a href="${project.github}" target="_blank" class="project-link">
                        <i data-lucide="github"></i> Repository
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(div);
    });
    
    if (window.lucide) window.lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', initProjects);
