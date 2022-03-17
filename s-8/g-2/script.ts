class Lavoratori {
    codredd: number;
    redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;
    redditoAnnuoNetto: number;
    spese: number;

    redditoL: any = document.querySelector('#reddAnLord') as HTMLInputElement;

    constructor(codredd: number, redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number, spese: number = tasseInps + tasseIrpef) {

        this.codredd = codredd;
        this.redditoAnnuoLordo = this.redditoL;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
        this.redditoAnnuoNetto = this.getRedditoAnnuoNetto();
        this.spese = tasseInps + tasseIrpef;

    }

    //getUtileTasse(): number;
    //getTasseInps(): number;
    getTasseIrpef(redd:any) {

        if (this.redditoL.value <= 15000) {
            return this.redditoL= (this.redditoAnnuoLordo * 23) / 100;
        } 
        if (this.redditoL.value >= 15001 && this.redditoL.value <= 28000) {
            return this.redditoL = ((this.redditoAnnuoLordo * 25) / 100) - 600;
        } 
        if (this.redditoL.value <= 28001 && this.redditoL.value <= 55000) {
            return this.redditoL = ((this.redditoAnnuoLordo * 35) / 100) - 3680;
        } 
        if (this.redditoL.value <= 55001 && this.redditoL.value <= 75000) {
            return this.redditoL= ((this.redditoAnnuoLordo * 43) / 100) - 5330;
        } 
        if(this.redditoL.value > 75000){
            return this.redditoL = ((this.redditoAnnuoLordo * 43) / 100) - 6830;
        }
        
    }

    getRedditoAnnuoLordo(): number {
        return this.redditoAnnuoLordo = this.redditoL.value;
    }
    getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoNetto = this.redditoAnnuoLordo - this.spese;
    }



}
//let federico = new Lavoratori(0, 0, 0, 0);

const calcola = document.querySelector('.btn') as HTMLButtonElement;

calcola.addEventListener('click', function () {
    //lordoAnnuo();

    let federico = new Lavoratori(0,0,0,0);

    let scrivi:string|any = document.querySelector('p') as HTMLInputElement;
    scrivi.textContent = federico.getTasseIrpef(0);

    console.log(federico.getRedditoAnnuoNetto);
});




function lordoAnnuo() {
    let annoL = document.querySelector('#reddAnLord') as HTMLInputElement;
    annoL.value;

    if (annoL.value == '') {
        console.log('non hai inserito nulla!');
    }
    /*else{
           annoL.textContent = annoL.value;
       }*/
}