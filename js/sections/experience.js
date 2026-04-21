/**
 * Experience Section - Dynamic Timeline
 */

const experienceData = [
    {
        date: "2024 - Present",
        title: "acmASCIS",
        role: "Competitive Programming Instructor / Head of Resources",
        verdict: "ACCEPTED",
        details: [
            "Mentoring students through offline and online sessions.",
            "Teaching concepts like Number Theory, DP, and Data Structures.",
            "Guiding problem-solving techniques for ICPC contests."
        ]
    },
    {
        date: "2025 - Aug",
        title: "ECPC Silver Medalist",
        role: "Top 10 Team in Egypt",
        verdict: "ACCEPTED",
        details: [
            "Ranked as one of the top 10 teams over 264 participating teams.",
            "Qualified for 2025 ACPC representing Egypt."
        ]
    },
    {
        date: "2023 - 2027",
        title: "Ain Shams University",
        role: "B.Sc. in Computer Science",
        verdict: "RUNNING",
        details: [
            "Current GPA: 3.89/4.00",
            "Core focus on Algorithms, OS, and Data Structures."
        ]
    }
];

function initExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    experienceData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item reveal ${item.verdict === 'ACCEPTED' ? 'active' : ''}`;
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">
                    ${item.date}
                    ${item.verdict ? `<span class="verdict-badge ${item.verdict.toLowerCase()}">${item.verdict}</span>` : ''}
                </div>
                <h3 class="font-heading">${item.title}</h3>
                <div class="timeline-role">${item.role}</div>
                <ul class="timeline-details">
                    ${item.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

document.addEventListener('DOMContentLoaded', initExperience);
