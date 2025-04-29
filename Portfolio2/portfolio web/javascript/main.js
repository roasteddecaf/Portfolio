// main.js - Common functionality for all pages

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    document.querySelector('header').appendChild(mobileMenuBtn);

    const navigation = document.querySelector('.navigation');
    mobileMenuBtn.addEventListener('click', function() {
        navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
    });

    // Adjust navigation display based on screen size
    function handleResize() {
        if (window.innerWidth > 768) {
            navigation.style.display = 'flex';
        } else {
            navigation.style.display = 'none';
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to current page in navigation
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.navigation a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});