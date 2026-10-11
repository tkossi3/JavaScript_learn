
function consoleAleatoire() {
    var nombreAleatoire = Math.floor(Math.random() * 100) + 1; // Génère un nombre aléatoire entre 1 et 100
    console.log("Nombre aléatoire généré : " + nombreAleatoire);
}

consoleAleatoire(); // Appelle la fonction pour afficher un nombre aléatoire dans la console

var consoleAleatoire2 = function() {
    var nombreAleatoire = Math.floor(Math.random() * 100) + 1; // Génère un nombre aléatoire entre 1 et 100
    console.log("Nombre aléatoire généré : " + nombreAleatoire);
}

consoleAleatoire2(); // Appelle la fonction pour afficher un nombre aléatoire dans la console