fetch('abbigliamento.json')
.then(res => res.json())
.then( data => {
   
    data.forEach((item:Capi) => {
        let maglietta = new Capi(item.id, item.codprod, item.collezione, item.capo, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        console.log(maglietta);
        console.log('Lo sconto totale sarà di:' + ' ' +maglietta.getSaldoCapo().toFixed(2) + '€');

console.log('Il costo in totale sarà di: ' + ' ' +maglietta.getAcquistoCapo().toFixed(2) + '€');
    });
    
});

class Capi{
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;

    constructor(id:number= 0, codprod:number= 0, collezione:string = ' ', capo:string = ' ', quantita:number = 0, colore:string = ' ', prezzoivaesclusa: number = 0, prezzoivainclusa: number = 0, disponibile: string = ' ', saldo: number = 0) {

        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    
    }

    getSaldoCapo():any {
        return (this.prezzoivainclusa * this.saldo)/100;
    }

    getAcquistoCapo():any {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
    


}

let pantaloni = new Capi(6, 1234, 'autunno', 'pantalone', 10, 'militare', 11, 13.5, 'non disponibile', 15);
let cargo = new Capi(6, 1234, 'primavera', 'pantalone', 3, 'nero', 12, 14.5, 'in arrivo!', 5);
let maglione = new Capi(6, 1234, 'inverno', 'maglione', 2, 'viola', 11, 13.5, 'in negozio', 50);

let div = document.createElement('div') as HTMLElement;
div;
console.log(pantaloni);
console.log('Lo sconto totale sarà di:' + ' ' +pantaloni.getSaldoCapo().toFixed(2) + '€');
console.log('Il costo in totale sarà di: ' + ' ' +pantaloni.getAcquistoCapo().toFixed(2) + '€');


console.log(cargo);
console.log('Lo sconto totale sarà di:' + ' ' +cargo.getSaldoCapo().toFixed(2) + '€');
console.log('Il costo in totale sarà di: ' + ' ' +cargo.getAcquistoCapo().toFixed(2) + '€');


console.log(maglione);
console.log('Lo sconto totale sarà di:' + ' ' +maglione.getSaldoCapo().toFixed(2) + '€');
console.log('Il costo in totale sarà di: ' + ' ' +maglione.getAcquistoCapo().toFixed(2) + '€');