
var maChaine = "Bonjour tout le monde !";

var monRegExp = new RegExp("on", "g"); // Expression régulière pour trouver toutes les occurrences de "on"

console.log(maChaine.test(monRegExp)); // Affiche true, car "on" est présent dans la chaîne

var monRegExp2 = /on/g; // Expression régulière pour trouver toutes les occurrences de "on"
console.log(maChaine.test(monRegExp2)); // Affiche true, car "on" est présent dans la chaîne
console.log(maChaine.match(monRegExp)); // Affiche ["on", "on"], toutes les occurrences de "on" dans la chaîne

console.log(maChaine.exec(monRegExp));

while (resultat){
    console.log(resultat);
    resultat = monRegExp.exec(maChaine);
}


var monRegExp2 = [/bonjour/i, /monde/i]; // Expressions régulières pour trouver "bonjour" et "monde", insensibles à la casse

monRegExp2.forEach(function(regExp){
    console.log(maChaine.match(regExp));
}); // Affiche ["Bonjour"] et ["monde"], les correspondances trouvées dans la chaîne