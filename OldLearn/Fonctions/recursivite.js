function compteARebours(nombre) {
    if(nombre === 0){
        return console.log("Terminé !");
    }
    console.log(nombre);
    nombre--;
    return compteARebours(nombre);
}

function compteAReboursIteratif(nombre) {
    while(nombre >= 0){
        if(nombre === 0){
            console.log("Terminé !");
        } else {
            console.log(nombre);
        }
        nombre--;
    }
}

function compteAReboursRecursif(nombre){
    for(let i = nombre; i >= 0; i--){
        if(i === 0){
            console.log("Terminé !");
        } else {
            console.log(i);
        }
    }
}

compteARebours(5); // Appelle la fonction pour commencer le compte à rebours à partir de 5

compteAReboursIteratif(5); // Appelle la fonction pour commencer le compte à rebours itératif à partir de 5

compteAReboursRecursif(5); // Appelle la fonction pour commencer le compte à rebours récursif à partir de 5