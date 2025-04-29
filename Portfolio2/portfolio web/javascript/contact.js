// contact.js - Form handling for contact page
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const fname = document.getElementById('fname').value.trim();
            const lname = document.getElementById('lname').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!fname || !lname || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission (in a real scenario, you'd use AJAX or similar)
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            
            // In a real implementation, you would send the data to a server here
            // Example using fetch():
            /*
            const formData = new FormData(contactForm);
            fetch('submit_form_destination.html', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert('Thank you for your message!');
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting your form. Please try again.');
            });
            */
        });
    }
});