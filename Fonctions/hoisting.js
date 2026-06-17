
a = 2;
var a;
console.log(a); // Affiche 2

console.log(b); // Affiche undefined
var b = 5;


var x = 10;
function testHoisting() {
    console.log(x); // Affiche undefined
    var x = 20;
    console.log(x); // Affiche 20
}

testHoisting();
console.log(x); // Affiche 10