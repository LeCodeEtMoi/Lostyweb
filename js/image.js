       console.log('yo')

       const imagesData = [
    {
    title: "Chonk Thor",
    description: "Description de l'image 1",
    imagePath: "Image2D/antoine-losty-asset_016.jpg"    
  },
  {
    title: "Image 2",
    description: "Description de l'image 2",
    imagePath: "chemin_vers_image_2.jpg"
  },
  // ... continuez pour les autres images
];

        // // Obtenez le nom de l'image à partir de la chaîne de requête de l'URL
        // const queryString = window.location.search;
        // const urlParams = new URLSearchParams(queryString);
        // const imageName = urlParams.get('image');
        
        // // Affichez la description de l'image
        // const imageDescription = document.getElementById('imageDescription');
        // imageDescription.textContent = `Description de l'image : ${imageName}`;
        
        // // Affichez l'image
        // const imageContainer = document.getElementById('imageContainer');
        // const image = document.createElement('img');
        // // image.src = `Image2D/${imageName}`;
        // // image.alt = imageName;
        // // imageContainer.appendChild(image);

        // Extraction du titre

        
// Récupérez le nom depuis le localStorage
const nom = localStorage.getItem('nom');

// Vérifiez si le nom existe dans le localStorage
if (nom) {
  console.log(`Je suis ${nom}`);
} else {
  console.log('Le nom n\'a pas été enregistré.');
}
