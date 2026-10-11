
function somme(valeur1, valeur2){
    return valeur1 + valeur2;
}

var moyenne = function claculerMoyenne(mesNotes){
    var somme = 0;
    for (var i = 0; i < mesNotes.length; i++) {
        somme += mesNotes[i];
    }
    return somme / mesNotes.length;
}

var notes = [15, 18, 12, 14, 16];

var resultatMoyenne = moyenne(notes);

console.log("La moyenne est : " + resultatMoyenne); // Affiche la moyenne

var resultats = moyenne([10, 20, 30, 40, 50]);

console.log("La moyenne est : " + resultats); // Affiche la moyenne


//IIFE : Immediately Invoked Function Expression

(function IIFE(global, $){
    var i = 0;
    while(i > 0){
        console.log(i);
    }
    global.somme = function calculerSomme(valeur1, valeur2){
        return valeur1 + valeur2;
    };
    console.log("La somme est : " + somme(10, 5)); // Affiche la somme
})(window, jQuery); // On passe window et jQuery en paramètres pour éviter les conflits avec d'autres bibliothèques

