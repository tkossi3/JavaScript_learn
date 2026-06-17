
function calculerSomme(valeur1, valeur2){
    var somme = valeur1 + valeur2;
    return somme;
}

var resultat = calculerSomme(5, 10);
console.log(resultat);

//alert("La somme de 5 et 10 est : " + resultat); // Affiche le résultat de la somme dans une boîte de dialogue


function checksEmail() {

    var champ = document.getElementById("e-mail");
    if(champ.value === "") {
        return true;
    } 
    else {
        return false;
    }
}

if(checksEmail() === true){
    console.log("Le champ email est vide.");
}


function obtenirJour(nbr){
    switch(nbr){
        case 1:
            return "Lundi";
        case 2:
            return "Mardi";
        case 3:
            return "Mercredi";
        case 4:
            return "Jeudi";
        case 5:
            return "Vendredi";
        case 6:
            return "Samedi";
        case 7:
            return "Dimanche";
        default:
            return "Numéro de jour invalide.";  
    }
}

console.log(obtenirJour(3)); // Affiche "Mercredi"