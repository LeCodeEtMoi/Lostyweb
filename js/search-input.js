// Sélectionnez l'élément de saisie de recherche et le bouton de recherche
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Sélectionnez toutes les images
const images = document.querySelectorAll('.artwork');

// Écoutez l'événement de clic sur le bouton de recherche
searchButton.addEventListener('click', function () {
  const searchTerm = searchInput.value.toLowerCase(); // Convertissez la recherche en minuscules

  // Réinitialisez l'affichage de toutes les images
  images.forEach(function (image) {
    image.style.display = 'block';
  });

  // Vérifiez si la recherche est vide, puis affichez toutes les images si c'est le cas
  if (searchTerm === '') {
    images.forEach(function (image) {
      image.style.display = 'block';
    });
    return; // Sortez de la fonction pour éviter la recherche supplémentaire
  }

  // Parcourez toutes les images pour les afficher ou les cacher en fonction de la recherche
  images.forEach(function (image) {
    const hasKeyword = image.querySelector('.keyword' + searchTerm); // Recherchez une classe de mot-clé correspondante
    if (hasKeyword) {
      image.style.display = 'block'; // Affichez l'image si la classe de mot-clé correspond
    } else {
      image.style.display = 'none'; // Cachez l'image sinon
    }
  });
});
