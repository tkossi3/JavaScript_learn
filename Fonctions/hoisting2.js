var x = 10;

function testHoisting() {
    var x = 5;

}

function testHoisting2(x) {
    x = 5;
    console.log(x);
    q = 5;
}

testHoisting();
console.log(x);

testHoisting2(x);
console.log(x);
console.log(q);