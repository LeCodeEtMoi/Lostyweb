






// Sélectionnez tous les éléments avec la classe "artwork"
const artworkElements3 = document.querySelectorAll('.artwork');

// Parcourez chaque élément et ajoutez un gestionnaire d'événement au clic de la souris
artworkElements3.forEach(artworkElement => {
  artworkElement.addEventListener('click', () => {
    // Récupérez l'élément img à l'intérieur de l'élément artwork
    const imgElement3 = artworkElement.querySelector('img');
    
    // Récupérez l'attribut "alt" de l'élément img, qui contient le nom de l'image
    const imageName3 = imgElement3.getAttribute('alt');
    
    // Affichez le nom de l'image dans la console
    console.log(`ALT ${imageName3}`);
  });
});




     
// Sélectionnez tous les éléments avec la classe "artwork"
const artworkElements = document.querySelectorAll('.artwork');

// Parcourez chaque élément et ajoutez un gestionnaire d'événement au survol de la souris
artworkElements.forEach(artworkElement => {
  artworkElement.addEventListener('mouseover', () => {
    // Récupérez l'élément img à l'intérieur de l'élément artwork
    const imgElement = artworkElement.querySelector('img');
    
    // Récupérez l'attribut "alt" de l'élément img, qui contient le nom de l'image
    const imageName = imgElement.getAttribute('alt');
    
    // Affichez le nom de l'image dans la console
    console.log(`Nom de l'image : ${imageName}`);
  });
});

// Enregistrez le nom dans le localStorage
localStorage.setItem("nom", "toto");
console.log('zoom.js');

//#### ZOOM #####//
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
//#### ZOOM #####//
