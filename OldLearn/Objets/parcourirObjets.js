
function Personne(nom, age, valide) {
    this.nom = nom;
    this.age = age;
    this.valide = valide;
}

var personne = new Personne("Dominic", 30, true);

for(var prop in personne){
    console.log(prop + " : " + personne[prop]);
}