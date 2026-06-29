
console.log(this);

function Personne(nom, age, valide) {
    //this = {};
    this.nom = nom;
    this.age = age;
    this.valide = valide;
    this.afficherThis = function(){
        console.log(this);
    }
    //return this;
}

var personne = new Personne("Dominic", 30, true);

console.log(personne.afficherThis());

var aujourdhui = new Date();
console.log(aujourdhui);