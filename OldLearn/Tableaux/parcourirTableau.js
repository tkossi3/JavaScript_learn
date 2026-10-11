
var mesClients = ["Jean", "Marie", "Paul", "Sophie"];

for (var i = 0; i < mesClients.length; i++) {
    console.log(mesClients[i]);
}

for(var index in mesClients){
    console.log(index + " est " + mesClients[index]);
}

mesClients.forEach(function(client, index){
    console.log(index + " est " + client);
});


mesClients.forEach(function(client){
    console.log("Bonjour " + client);
});