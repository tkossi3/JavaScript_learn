
var monNom = "Dominic";

console.log(monNom);
//console.log(window.monNom);

function mettreAJourNom(nouveauNom){
    var monNom = nouveauNom;
    console.log("Le nom mis à jour est : " + monNom);
}

mettreAJourNom("Jean"); // Appelle la fonction pour mettre à jour le nom avec "Jean"

console.log(monNom); // Affiche le nom original "Dominic" car la variable locale dans la fonction ne modifie pas la variable globale


function mettreAJourNomGlobal(nouveauNom){
    monNom = nouveauNom; // Modifie la variable globale monNom
    console.log("Le nom mis à jour globalement est : " + monNom);
}

mettreAJourNomGlobal("Marie"); // Appelle la fonction pour mettre à jour le nom globalement avec "Marie"

console.log(monNom); // Affiche le nom mis à jour "Marie" car la fonction a modifié la variable globale


function mettreAJourNomLocal(nouveauNom){
    var monNom = nouveauNom; // Crée une variable locale monNom qui masque la variable globale
    console.log("Le nom mis à jour localement est : " + monNom);
}

mettreAJourNomLocal("Pierre"); // Appelle la fonction pour mettre à jour le nom localement avec "Pierre"

console.log(monNom); // Affiche le nom global "Marie" car la variable locale dans la fonction ne modifie pas la variable globale