
var monScore = 0;

function calcalScore(points){
    monScore += points;
    console.log("Mon score est maintenant de : " + monScore);
}

calcalScore(10); // Appelle la fonction pour ajouter 10 points au score

calcalScore(5); // Appelle la fonction pour ajouter 5 points au score

calcalScore(20); // Appelle la fonction pour ajouter 20 points au score



function calculerSuperficieRectangle(longueur, largeur, unité = "m"){
    var superficie = longueur * largeur;
    console.log("La superficie du rectangle est de : " + superficie + " " + unité + "² .");
}

calculerSuperficieRectangle(5, 10, "m"); // Appelle la fonction pour calculer la superficie d'un rectangle de 5 par 10

calculerSuperficieRectangle(8, 12); // Appelle la fonction pour calculer la superficie d'un rectangle de 8 par 12



function calculerSomme(a, b){
    var mesArguments = Array.prototype.slice.apply(arguments);
    console.log(mesArguments.sort());
    var somme = 0;
    for(var i = 0; i < arguments.length; i++){
        somme += arguments[i];
    }
    console.log("La somme des arguments est de : " + somme);
}

calculerSomme(5, 10); // Appelle la fonction pour calculer la somme de 5 et 10

calculerSomme(1, 2, 3, 4, 5); // Appelle la fonction pour calculer la somme de 1, 2, 3, 4 et 5