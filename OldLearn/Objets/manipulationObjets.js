
var personne = {
    nom : "Dominic",
    age : 20,
    administrateur : false,
    direBonjour : function(){
        console.log("Bonjour, je m'appelle " + this.nom + " et j'ai " + this.age + " ans.");
    }
}

console.log(personne.nom); // Affiche le nom de la personne

personne.age = 19;
console.log(personne.age); // Affiche l'âge de la personne
console.log(personne.administrateur); // Affiche si la personne est administrateur ou non

personne.ville = "Lomé";
console.log(personne.ville); // Affiche la ville de la personne

personne.direBonjour(); // Appelle la méthode direBonjour et affiche le message dans la console

