/* VAR/LET */

var nome = 'Federico';
console.log(nome);
var cognome = 'Marra';
console.log(cognome); {
    let nome = 'Nino';
    console.log(nome); // l'output sarà il contenuto di LET per cià che è contenuto nel BLOCCO.
    let cognome = 'Rossi';
    console.log(cognome);
}
console.log(nome); // l'output sarà il contenuto di VAR e non quello di LET.
console.log(cognome);

/* CONST */

const animale = "Gatto";
console.log(animale);

const animale2 = "Rinoceronte";
console.log(animale2);


// animale = "cane";
// console.log(animale);//genererà errore perche una variabile const NON può essere RIASSEGNATA.

/* BOOLEANO */

var nome = "Federico";
console.log(nome);

var eta = 21;
console.log(eta)

var patente = false; //true;
console.log(patente);

if (patente == true) {
    console.log('Congratulazioni, sei in possesso della PATENTE di GUIDA !');
} else {
    console.log('Non sei in possesso della PATENTE di GUIDA');
}

var finale = 'Il suo nome è: ' + nome + ', il suo cognome è: ' + cognome + 
', la sua eta è: ' + eta + ' ed è in possesso della patente? ' + patente;
console.log(finale);

/* OPERATORI MATEMATICI */

var numero = 10;
var numero1 = 15;

numero += numero1;
console.log(numero)

numero -= numero1;
console.log(numero)

numero *= (numero1 + 5); //espressione aritmetica viene effettuata prima la somma nella parentesi e solo dopo la moltiplicazione.
console.log(numero)

numero /= numero1;
console.log(numero)