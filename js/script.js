const grid = document.querySelector('.grid');
const images = grid.querySelectorAll('img');
const numImages = images.length;

let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % numImages;
  reorderImages();
}, 3000); // Changer l'image toutes les 3 secondes

function reorderImages() {
  grid.style.transform = `translateX(-${currentIndex * 100}%)`;
}


console.log(images); // Vérification dans la console

// Autres opérations ou fonctionnalités JavaScript
