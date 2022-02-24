//  FUNZIONE RANGE ANNI   //
function rangeAnni(){
    var annoAttuale = 2022;
    var annoNascita = 2000;
    function eta(){
        console.log(annoAttuale - annoNascita);
    }
    return eta();
}
rangeAnni();

//   FUNZIONE FRECCIA   //

zyber = () => 'Sono un ninja!!!'
console.log(zyber());

function doubleFunction(){
    var piedi = 10;
    function voto(){
        console.log((piedi * piedi )/ 5);
    }
    return voto();
}
doubleFunction();

var num1 = 55;
var num2 = 62;

console.log(num1 == num2); // FALSE

console.log(num1 === num2); // FALSE

console.log(num1 < num2); // TRUE

console.log(num1 <= num2); // TRUE

console.log(num1 != num2); // TRUE

console.log(num1 !== num2); // TRUE

var num3 = 55;
var num4 = '55';
// == >>>> UGUALE!
// === >>>> IDENTICO!
console.log(num3 == num4); // TRUE per essere uguali devono avere lo stetto valore 
                           //anche se in forma diversa (es. 55 valore numerico e 55 sottoforma di stringa sono UGUALI)

console.log(num3 === num4); // FALSE

num1 < num2 && num3 == num4;
console.log(num1 < num2 && num3 == num4);
// alert(num1 < num2 && num3 == num4); // TRUE

console.log(num1 > num2 || num3 == num4); // TRUE

console.log(num1 == num2 || num3 > num4); // FLASE
