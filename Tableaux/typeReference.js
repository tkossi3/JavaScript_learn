

var etudiants = ["Jean", "Marie", "Paul", "Sophie"];

var etudiantMiseAJour = etudiants;

etudiants[0] = "Jacques";

console.log(etudiantMiseAJour); // Affiche "Jacques"

etudiantMiseAJour[1] = "Claire";

console.log(etudiants); // Affiche "Claire"