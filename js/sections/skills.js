/**
 * Skills Section - Data and Rendering
 */

const skillsData = [
    {
        category: "Algorithms & DS",
        icon: "brain-circuit",
        items: ["Graph Theory", "Dynamic Programming", "Number Theory", "Segmentation", "Sorting"]
    },
    {
        category: "Languages",
        icon: "code",
        items: ["C++ (Expert)", "Java", "Python", "JavaScript"]
    },
    {
        category: "Backend",
        icon: "server",
        items: ["Node.js", "Express.js", "Oracle DBMS", "MongoDB", "JSON Storage"]
    },
    {
        category: "Systems & CS",
        icon: "cpu",
        items: ["Operating Systems", "Memory Management", "Synchronization", "Scheduling"]
    },
    {
        category: "Mentorship",
        icon: "users",
        items: ["CP Instruction", "Resource Management", "Technical Training"]
    }
];

function initSkills() {
    const container = document.querySelector('.skills-container');
    if (!container) return;

    skillsData.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'skill-category reveal';
        div.innerHTML = `
            <h3 class="font-heading"><i data-lucide="${cat.icon}"></i> ${cat.category}</h3>
            <div class="skill-list">
                ${cat.items.map(skill => `
                    <div class="skill-item">
                        <i data-lucide="check-circle" class="skill-item-icon"></i>
                        <span>${skill}</span>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
    });
    
    if (window.lucide) window.lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', initSkills);
