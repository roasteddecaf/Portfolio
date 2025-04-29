// projects.js - Enhancements for projects page
document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    
    if (projects.length > 0) {
        projects.forEach(project => {
            // Add hover effect
            project.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            });
            
            project.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
            
            // Click to expand project details
            project.addEventListener('click', function() {
                const details = this.querySelector('p');
                details.style.display = details.style.display === 'none' ? 'block' : 'none';
            });
        });
    }
});