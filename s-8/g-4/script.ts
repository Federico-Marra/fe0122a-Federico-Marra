//input

let inptRicarica = document.querySelector('#ricarica') as HTMLInputElement;
let inptSaldo = document.querySelector('#saldo') as HTMLInputElement;

//bottoni

let btnRicarica = document.querySelector('#btn-ricarica')as HTMLInputElement;
let btnChiama = document.querySelector('#btn-chiama')as HTMLInputElement;

// intefaccia

interface iSmartphone {

    contratto:string; //nome contratto
    numberCarica:number; //quantitativo ricarica
    numberChiamate: number; //numero chiamate effettutate!

}

//class

class FirstUser implements iSmartphone{

    contratto:string; //nome contratto
    numberCarica:number; //quantitativo ricarica
    numberChiamate: number; //numero chiamate effettutate!
    saldo: number;

    constructor(contratto:string, numberCarica:number, numberChiamate:number, saldo:number ){

        this.contratto= contratto;
        this.numberCarica= numberCarica;
        this.numberChiamate= numberChiamate;
        this.saldo = saldo;
    }

    public getRicarica():void{
        
    }

}

//funzioni 

btnRicarica.addEventListener('click', function(){
    inptRicarica.value;
});

