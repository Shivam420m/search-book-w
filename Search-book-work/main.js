const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let index = 0;

function autoChangeCarousel() {
  index = (index + 1) % images.length; // Cycle through images
  const translateX = -index * 100; // Shift by image width
  carouselImages.style.transform = translateX(${translateX}%);
}

// Auto change every 3 seconds
setInterval(autoChangeCarousel, 3000);