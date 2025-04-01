let slideIndex = 0;
let slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach(slide => {
    slide.classList.remove('active', 'slide-out', 'slide-in');
  });

  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Show the current slide and move it to the center
  slides[slideIndex].classList.add('active');
  
    // Add slide-out effect for the previous slide
    let previousSlideIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
    slides[previousSlideIndex].classList.add('slide-out');
   // Wait for 3 seconds before sliding the previous one out
  
  // Move the new slide in after the previous slide has slid out
  setTimeout(() => {
    slides[slideIndex].classList.add('slide-in');
  }, 100); // Slight delay to ensure the previous slide has completely finished transitioning

  setTimeout(() => {
    slides[previousSlideIndex].classList.remove('active', 'slide-out');
  }, 1000);

  // Change slide every 6 seconds (3 seconds for the current slide + 3 seconds for the transition)
  setTimeout(showSlides, 1000); // 6 seconds to allow for full transition cycle
}

// Start the slideshow once the page is loaded
document.addEventListener('DOMContentLoaded', function() {
  showSlides();
});