/**
 * Skills Section - Data and Rendering
 * Original skill data restored. Icons use Font Awesome (loaded via CDN).
 * Design: original bubble/graph-node cards with icon per skill item.
 */

const skillsData = [
    {
        category: "Programming Languages",
        icon: "fa-solid fa-file-code",
        items: [
            { name: "C++",        icon: "fa-solid fa-c" },
            { name: "Java",       icon: "fa-brands fa-java" },
            { name: "Python",     icon: "fa-brands fa-python" },
            { name: "JavaScript", icon: "fa-brands fa-js" },
            { name: "C#",         icon: "fa-brands fa-microsoft" }
        ]
    },
    {
        category: "Backend & Databases",
        icon: "fa-solid fa-server",
        items: [
            { name: "Node.js",     icon: "fa-brands fa-node-js" },
            { name: "Express.js",  icon: "fa-brands fa-node" },
            { name: "Oracle DBMS", icon: "fa-solid fa-database" },
            { name: "MongoDB",     icon: "fa-solid fa-leaf" }
        ]
    },
    {
        category: "Systems & CS",
        icon: "fa-solid fa-microchip",
        items: [
            { name: "Data Structures", icon: "fa-solid fa-network-wired" },
            { name: "Algorithms",      icon: "fa-solid fa-diagram-project" },
            { name: "OOP",             icon: "fa-solid fa-cubes" },
            { name: "DP & Trees",      icon: "fa-solid fa-sitemap" }
        ]
    },
    {
        category: "Tools & DevOps",
        icon: "fa-solid fa-toolbox",
        items: [
            { name: "Git & GitHub", icon: "fa-brands fa-git-alt" },
            { name: "Docker",       icon: "fa-brands fa-docker" },
            { name: "JIRA",         icon: "fa-brands fa-jira" }
        ]
    }
];

function initSkills() {
    const container = document.querySelector('.skills-container');
    if (!container) return;

    skillsData.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'skill-category reveal';

        div.innerHTML = `
            <h3 class="font-heading">
                <i class="${cat.icon}"></i>
                ${cat.category}
            </h3>
            <div class="skill-list">
                ${cat.items.map(skill => `
                    <div class="skill-item">
                        <i class="${skill.icon} skill-item-icon"></i>
                        <span>${skill.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', initSkills);
