class SonAccount{

    deposito: number;
    prelievo: number;
    saldoDisponibile: number;
    
    oneDeposit(): number{
        return this.deposito;
    }
    oneWithDraw(): number{
        return this.prelievo;
    }

    constructor (deposito:number, prelievo: number){
        this.deposito = deposito;
        this.prelievo = prelievo;
        this.saldoDisponibile = this.deposito - this.prelievo;
    }
}

class MotherAccount extends SonAccount{
    interesse: number ;
    saldoDisponibile: number;
    detInteresse:number;

    addInterest(): number{
        return this.interesse;
    }

    balanceInit(): number{
        return ((this.deposito - this.prelievo)* this.interesse ) /100 ;
    }
    
    constructor (deposito: number, prelievo: number, interesse:number = 10, saldoDisponibile:number, detInteresse:number) {
        super(deposito, prelievo);
        this.interesse = interesse;
        this.detInteresse = this.balanceInit();
        this.saldoDisponibile = (this.deposito - this.prelievo) - this.balanceInit();
    }
}

let figlio = new SonAccount(1000, 30);
let madre = new MotherAccount(3000, 500, 10, 0, 0);

console.log(figlio);
console.log(madre);