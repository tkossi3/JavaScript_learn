
function add_soust(valeur1, valeur2){

    var somme = valeur1 + valeur2;

    var soustraction = valeur1 - valeur2;

    return {somme : somme, difference : soustraction};
}

var resultat = add_soust(10, 5);

console.log("La somme est : " + resultat.somme); // Affiche la somme
console.log("La soustraction est : " + resultat.difference); // Affiche la soustraction
