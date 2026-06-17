
var notesEtudiants = [
    [65, 80, 90, 95],
    [70, 85, 75, 80],
    [75, 80, 85, 90]
]

console.log(notesEtudiants[0]);
console.log(notesEtudiants[1]);
console.log(notesEtudiants[2]);

console.log(notesEtudiants[0][0]);

var formations = [
    ["Node.js, le JavaScript coté serveur", "François"]
    ["React, la bibliothèque JavaScript pour l'interface utilisateur", "Marie"],
    ["Angular, le framework JavaScript pour les applications web", "Pierre"],
    ["Vue.js, le framework JavaScript progressif", "Sophie"]
]

for(var i = 0; i < formations.length; i++){
    console.log("Formation : " + formations[i][0] + ", Formateur : " + formations[i][1]);
} 