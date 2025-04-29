// media.js - Enhancements for media page
document.addEventListener('DOMContentLoaded', function() {
    const merchItems = document.querySelectorAll('.merch-item');
    
    if (merchItems.length > 0) {
        merchItems.forEach(item => {
            // Add to cart functionality (simulated)
            const buyButton = item.querySelector('.buy-button');
            buyButton.addEventListener('click', function(e) {
                e.preventDefault();
                const itemName = item.querySelector('p').textContent;
                const itemPrice = item.querySelector('.price').textContent;
                
                alert(`Added ${itemName} (${itemPrice}) to your cart!`);
                
                // In a real implementation, you would add to a shopping cart
                // Example:
                // addToCart({
                //     name: itemName,
                //     price: itemPrice,
                //     url: this.href
                // });
            });
        });
    }
    
    // Social media link tracking (simulated)
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            // In a real implementation, you might track this click
            console.log(`Social link clicked: ${this.href}`);
        });
    });
});