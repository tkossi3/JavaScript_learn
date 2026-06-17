
function add_soust(valeur1, valeur2){

    var somme = valeur1 + valeur2;

    var soustraction = valeur1 - valeur2;

    return [somme, soustraction];
}

var resultat = add_soust(10, 5);

console.log("La somme est : " + resultat[0]); // Affiche la somme
console.log("La soustraction est : " + resultat[1]); // Affiche la soustraction
