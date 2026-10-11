
function Personne(nom, age, valide) {
    //this = {};
    this.nom = nom;
    this.age = age;
    this.valide = valide;
    //return this;
}

var personne = new Personne("Dominic", 30, true);

console.log(personne);

var aujourdhui = new Date();
console.log(aujourdhui);