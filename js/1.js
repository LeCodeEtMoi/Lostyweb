const droite = document.querySelector('.carousel-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const images = carouselContainer.querySelectorAll('.image-wrapper');
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  reorderImages();
}, 1000);

function reorderImages() {
  const image1 = images[0];
  const image2 = images[1];

  carouselContainer.insertBefore(image2, image1);
}