var x;
var y;

x;
y;

x = 10;
y = 20;

console.log(monNom);

var monNom = "Dominic";

//var total = prix * quantite;
//console.log(total);

//prix = 5;
//quantite = 10;

afficherMessage("Kodjo");

function afficherMessage(nom) {
    console.log("Bonjour, " + nom + ", ceci est un message !");
}

afficherMessage("Dominic");

function a (nombre, factorial) {
    factorial = (factorial === undefined) ? nombre : factorial;
    if (nombre < 3) {
        return factorial;
    }
    return a(nombre - 1, factorial * (nombre - 1));
}