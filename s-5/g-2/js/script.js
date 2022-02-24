var budget = document.querySelector('input');

 budget.forEach(function(calcola){
     calcola.addEventListener('click', function(){
         var numero = this.getAttribute('data-simbolo');
         document.querySelector('#risultato').value = numero;
     })
 });


switch (budget) {
    case '100%':
        console.log('Dove li hai presi sti soldi zi?');
        break;
    case '90%':
        console.log('Attento a quanto spendi.');
        break;
    case '80%':
        console.log('A zi, scegli se vedere il bicchiere mezzo pieno o mezzo vuoto!');
        break;
    case '70%':
        console.log('Sei al limite della soglia di povertà!');
    case '60%':
        console.log('Attento a quanto spendi.');
        break;
    case '50%':
        console.log('A zi, scegli se vedere il bicchiere mezzo pieno o mezzo vuoto!');
        break;
    case '40%':
        console.log('Sei al limite della soglia di povertà!');
        break;
    case '30%':
        console.log('Attento a quanto spendi.');
        break;
    case '20%':
        console.log('A zi, scegli se vedere il bicchiere mezzo pieno o mezzo vuoto!');
        break;
    case '10%':
        console.log('Sei al limite della soglia di povertà!');
        break;
    case '0%':
        console.log('Sei al limite della soglia di povertà!');
        break;
    default:
        console.log('Sei uno straccione e pure povero.');
}

