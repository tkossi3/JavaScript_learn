
var personne = {
    nom : "Dominic",
    age : 20,
    administrateur : false,
    ville : "Lomé"
}
console.log(personne);


var personne2 = personne;

console.log(personne2);


personne2.nom = "Kossi";
console.log(personne);