 localStorage.clear();
  // Quand il y a un clique on cherche l'id puis on l'envoie dans un localStorage
// Écouter l'événement de réception de message
window.addEventListener("message", function(event) {
  // event.data contient le message reçu
  console.log("Message reçu : " + event.data);
});

var nombre = localStorage.getItem("monChat");
console.log(nombre)




  
  console.log('Image.js')

//Cherche dans la la data a quoi corespont le nombre ( si id de imageData = nombre 




// Une fois trouvé envoyer les information à la page

  let nomData = [ "Chonk Thor","Jack","Moon",]
  let decriptionData = ["Description de l'image 1 est bien et genial",]
  let urlData = ["toto",]


var nom = nomData[nombre];
var description = decriptionData[nombre];
var url = urlData[nombre];
console.log(nom)
console.log(description)
console.log(url)
console.log(nomData)




  // Voila ce qu'il faut faire récupere le nom , avec le nom on check imageData on repere si title est = à nom et si oui on affiche la description .
// for (var i = 0; i < nomData.length; i++) {
//   console.log(nomData[i]);
// }

  


