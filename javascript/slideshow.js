document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.querySelector('.wrapper');
  const images = wrapper.querySelectorAll('img');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  // Change image every 5 seconds
  setInterval(nextImage, 5000);
});