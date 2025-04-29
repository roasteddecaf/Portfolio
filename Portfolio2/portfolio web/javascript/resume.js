// resume.js - Enhancements for resume page
document.addEventListener('DOMContentLoaded', function() {
    // Skill progress bars (optional)
    const skillsSection = document.querySelector('.resume ul');
    if (skillsSection) {
        const skills = [
            { name: 'Java', level: 80 },
            { name: 'Python', level: 75 },
            { name: 'HTML/CSS', level: 90 },
            { name: 'JavaScript', level: 70 },
            { name: 'React', level: 65 },
            { name: 'Node.js', level: 60 },
            { name: 'MySQL', level: 70 },
            { name: 'MongoDB', level: 60 },
            { name: 'Git', level: 80 }
        ];
        
        skillsSection.innerHTML = '';
        skills.forEach(skill => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="skill-name">${skill.name}</span>
                <div class="skill-bar">
                    <div class="skill-level" style="width: ${skill.level}%"></div>
                </div>
                <span class="skill-percent">${skill.level}%</span>
            `;
            skillsSection.appendChild(li);
        });
    }
    
    // Print resume button
    const printButton = document.createElement('button');
    printButton.className = 'print-resume';
    printButton.textContent = 'Print Resume';
    printButton.addEventListener('click', function() {
        window.print();
    });
    document.querySelector('.resume .content').appendChild(printButton);
});