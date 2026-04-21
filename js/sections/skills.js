/**
 * Skills Section - Data and Rendering
 * Uses Font Awesome icons (fa-brands / fa-solid) loaded via CDN in index.html
 */

const skillsData = [
    {
        category: "Programming Languages",
        categoryIcon: "fa-solid fa-file-code",
        accentVar: "--clr-accent",
        accentColor: "#6366f1",
        items: [
            { name: "C#",         icon: "fa-brands fa-microsoft" },
            { name: "C++",        icon: "fa-solid fa-c" },
            { name: "Java",       icon: "fa-brands fa-java" },
            { name: "Python",     icon: "fa-brands fa-python" },
            { name: "JavaScript", icon: "fa-brands fa-js" },
            { name: "Dart",       icon: "fa-solid fa-mobile-screen-button" }
        ]
    },
    {
        category: "Backend & Databases",
        categoryIcon: "fa-solid fa-server",
        accentVar: "--clr-cyan",
        accentColor: "#06b6d4",
        items: [
            { name: ".NET Core",             icon: "fa-brands fa-microsoft" },
            { name: "ASP.NET Core Web APIs", icon: "fa-solid fa-server" },
            { name: "SQL Server",            icon: "fa-solid fa-database" },
            { name: "Oracle DBMS",           icon: "fa-solid fa-database" },
            { name: "LINQ",                  icon: "fa-solid fa-filter" },
            { name: "Entity Framework",      icon: "fa-solid fa-layer-group" }
        ]
    },
    {
        category: "Tools & DevOps",
        categoryIcon: "fa-solid fa-cubes",
        accentVar: "--clr-purple",
        accentColor: "#a855f7",
        items: [
            { name: "Git & GitHub",               icon: "fa-brands fa-github" },
            { name: "Docker",                     icon: "fa-brands fa-docker" },
            { name: "JIRA",                       icon: "fa-brands fa-jira" },
            { name: "OOP Architecture",           icon: "fa-solid fa-project-diagram" },
            { name: "Data Structures & Algorithms", icon: "fa-solid fa-network-wired" }
        ]
    },
    {
        category: "Natural Languages",
        categoryIcon: "fa-solid fa-globe",
        accentVar: "--clr-amber",
        accentColor: "#f59e0b",
        items: [
            { name: "Arabic — Native",            icon: "fa-solid fa-language" },
            { name: "English — Working Proficiency", icon: "fa-solid fa-comments" }
        ]
    },
    {
        category: "Soft Skills",
        categoryIcon: "fa-solid fa-lightbulb",
        accentVar: "--clr-pink",
        accentColor: "#ec4899",
        items: [
            { name: "Ownership Mindset",  icon: "fa-solid fa-hand-holding-heart" },
            { name: "Continuous Learning",icon: "fa-solid fa-book-reader" },
            { name: "Team Collaboration", icon: "fa-solid fa-users" },
            { name: "Analytical Thinking",icon: "fa-solid fa-brain" }
        ]
    }
];

function initSkills() {
    const container = document.querySelector('.skills-container');
    if (!container) return;

    skillsData.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'skill-category reveal';
        div.style.setProperty('--cat-accent', cat.accentColor);

        div.innerHTML = `
            <div class="skill-category-header">
                <div class="skill-category-icon" style="color:${cat.accentColor}; background:${cat.accentColor}22">
                    <i class="${cat.categoryIcon}"></i>
                </div>
                <h3 class="font-heading">${cat.category}</h3>
            </div>
            <ul class="skill-list">
                ${cat.items.map(skill => `
                    <li class="skill-item">
                        <i class="${skill.icon} skill-item-icon" style="color:${cat.accentColor}"></i>
                        <span>${skill.name}</span>
                    </li>
                `).join('')}
            </ul>
        `;
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', initSkills);
