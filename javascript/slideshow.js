let currentSlide = 0;
const images = document.querySelectorAll('.wrapper img');

function showSlide(index) {
    // Remove active class from all images
    images.forEach(img => img.classList.remove('active'));
    
    // Add active class to current image
    images[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(0);

// Change slides every 4 seconds
setInterval(nextSlide, 4000);