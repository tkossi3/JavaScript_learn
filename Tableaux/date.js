
var maintenant = new Date();

var date = new Date(0);

var date2 = new Date(2024, 5, 15);

console.log(maintenant); // Affiche la date et l'heure actuelles

console.log(date); // Affiche "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"

date = new Date("2024-06-15T12:00:00Z");

console.log(date); // Affiche "Sat Jun 15 2024 14:00:00 GMT+0200 (Central European Summer Time)"


maintenant.getUTCDate(); // Affiche le jour du mois (1-31) en temps universel coordonné (UTC)
maintenant.getUTCDay(); // Affiche le jour de la semaine (0-6) en temps universel coordonné (UTC)
maintenant.getUTCFullYear(); // Affiche l'année en temps universel coordonné (UTC)

maintenant.getFullYear(); // Affiche l'année locale

maintenant.setFullYear(2025); // Modifie l'année locale à 2025
console.log(maintenant); // Affiche la date avec l'année modifiée à 2025


var date1 = new Date(2024, 5, 15);
var date2 = new Date(2024, 5, 20);

date1 == date2; // false, car ce sont deux objets différents
date1.getTime() == date2.getTime(); // false, car les dates sont différentes
console.log(date1.getTime()); // Affiche le timestamp de date1
console.log(date2.getTime()); // Affiche le timestamp de date2