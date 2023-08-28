console.log("coucou")

localStorage.setItem('nom', 'Spike');

// Récupérez toutes les images avec la classe "zoom-image"
const zoomImages = document.querySelectorAll('.zoom-image');

// Parcours de toutes les images et ajoutez l'événement de survol
zoomImages.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.querySelector('img').style.transform = 'scale(1.2)';
  });

  image.addEventListener('mouseout', () => {
    image.querySelector('img').style.transform = 'scale(1)';
  });
});