// JavaScript for floating images effect

document.addEventListener('DOMContentLoaded', function() {
    // Mouse movement tracking for glow effect
    const floatingContainers = document.querySelectorAll('.floating-container');
    
    floatingContainers.forEach(container => {
        container.addEventListener('mousemove', function(e) {
            const glowElement = this.querySelector('.glow');
            if (glowElement) {
                // Calculate mouse position relative to container
                const rect = this.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / this.offsetWidth) * 100;
                const y = ((e.clientY - rect.top) / this.offsetHeight) * 100;
                
                // Update CSS variables for glow position
                glowElement.style.setProperty('--x', `${x}%`);
                glowElement.style.setProperty('--y', `${y}%`);
            }
        });
    });
    
    // Add subtle random movement to floating images
    const floatingImages = document.querySelectorAll('.floating-image');
    
    floatingImages.forEach(image => {
        // Get initial position
        const initialTop = parseInt(window.getComputedStyle(image).top);
        const initialLeft = parseInt(window.getComputedStyle(image).left);
        
        // Add subtle random movement
        setInterval(() => {
            const randomX = Math.random() * 10 - 5; // -5 to 5
            const randomY = Math.random() * 10 - 5; // -5 to 5
            
            image.style.transform = `translate(${randomX}px, ${randomY}px)`;
            
            setTimeout(() => {
                image.style.transform = 'translate(0, 0)';
            }, 1000);
        }, 5000);
    });
});
