function moyenne (mesNotes){
    let somme = 0;
    for (let i = 0; i < mesNotes.length; i++) {
        somme += mesNotes[i];
    }
    return somme / mesNotes.length;
}

var notes = [15, 18, 12, 14, 16];

var resultatMoyenne = moyenne(notes);

console.log("La moyenne est : " + resultatMoyenne); // Affiche la moyenne

var resultats = moyenne([10, 20, 30, 40, 50]);

console.log("La moyenne est : " + resultats); // Affiche la moyenne


function balise_HTML(balise){
    function emballer_text(text){
        return "<" + balise + ">" + text + "</" + balise + ">";
    }
    return emballer_text;
}

var balise_p = balise_HTML("p");

var resultatBalise = balise_p("Bonjour, ceci est un texte emballé dans une balise");

console.log(resultatBalise); // Affiche le texte emballé dans la balise <p>