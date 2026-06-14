
var mesClients = ["Kodjo", "Jean", "Sophie", "Marie"];
mesClients.push("Paul");

console.log(mesClients); // Affiche ["Kodjo", "Jean", "Sophie", "Marie", "Paul"]

var retire = mesClients.pop();

console.log(retire); // Affiche "Paul"
console.log(mesClients); // Affiche ["Kodjo", "Jean", "Sophie", "Marie"]

mesClients.unshift("Paul");
console.log(mesClients); // Affiche ["Paul", "Kodjo", "Jean", "Sophie", "Marie"]

delete mesClients[0];
console.log(mesClients); // Affiche [undefined, "Kodjo", "Jean", "Sophie", "Marie"]


retire = mesClients.splice(0, 1);
console.log(mesClients); // Affiche ["Kodjo", "Jean", "Sophie", "Marie"]


mesClients.sort();
console.log(mesClients); // Affiche ["Jean", "Kodjo", "Marie", "Sophie"]

mesClients.reverse();
console.log(mesClients); // Affiche ["Sophie", "Marie", "Kodjo", "Jean"]

var mesClients2 = ["Jean", "Sophie", "Marie", "Paul", "vignon", "dosseh"];

function insensibleALaCasse(a, b) {
    if(a.toUpperCase() < b.toUpperCase()) return -1;
    if(a.toUpperCase() > b.toUpperCase()) return 1;
    return 0;
}

mesClients2.sort(insensibleALaCasse);
console.log(mesClients2); // Affiche ["dosseh", "Jean", "Marie", "Paul", "Sophie", "vignon"]

var mesClients3 = mesClients2.join(", ");
console.log(mesClients3); // Affiche "dosseh, Jean, Marie, Paul, Sophie, vignon"

var mesClients4 = mesClients3.split(", ");
console.log(mesClients4); // Affiche ["dosseh", "Jean", "Marie", "Paul", "Sophie", "vignon"]

mesClients4.includes("Jean"); // true
mesClients4.includes("Jacques"); // false