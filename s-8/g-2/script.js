var Lavoratori = /** @class */ (function () {
    function Lavoratori(codredd, redditoAnnuoLordo, tasseInps, tasseIrpef, spese) {
        if (spese === void 0) { spese = tasseInps + tasseIrpef; }
        this.redditoL = document.querySelector('#reddAnLord');
        this.codredd = codredd;
        this.redditoAnnuoLordo = this.redditoL;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
        this.redditoAnnuoNetto = this.getRedditoAnnuoNetto();
        this.spese = tasseInps + tasseIrpef;
    }
    //getUtileTasse(): number;
    //getTasseInps(): number;
    Lavoratori.prototype.getTasseIrpef = function (redd) {
        if (this.redditoL.value <= 15000) {
            return this.redditoL = (this.redditoAnnuoLordo * 23) / 100;
        }
        if (this.redditoL.value >= 15001 && this.redditoL.value <= 28000) {
            return this.redditoL = ((this.redditoAnnuoLordo * 25) / 100) - 600;
        }
        if (this.redditoL.value <= 28001 && this.redditoL.value <= 55000) {
            return this.redditoL = ((this.redditoAnnuoLordo * 35) / 100) - 3680;
        }
        if (this.redditoL.value <= 55001 && this.redditoL.value <= 75000) {
            return this.redditoL = ((this.redditoAnnuoLordo * 43) / 100) - 5330;
        }
        if (this.redditoL.value > 75000) {
            return this.redditoL = ((this.redditoAnnuoLordo * 43) / 100) - 6830;
        }
    };
    Lavoratori.prototype.getRedditoAnnuoLordo = function () {
        return this.redditoAnnuoLordo = this.redditoL.value;
    };
    Lavoratori.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoNetto = this.redditoAnnuoLordo - this.spese;
    };
    return Lavoratori;
}());
//let federico = new Lavoratori(0, 0, 0, 0);
var calcola = document.querySelector('.btn');
calcola.addEventListener('click', function () {
    //lordoAnnuo();
    var federico = new Lavoratori(0, 0, 0, 0);
    var scrivi = document.querySelector('p');
    scrivi.textContent = federico.getTasseIrpef(0);
    console.log(federico.getRedditoAnnuoNetto);
});
function lordoAnnuo() {
    var annoL = document.querySelector('#reddAnLord');
    annoL.value;
    if (annoL.value == '') {
        console.log('non hai inserito nulla!');
    }
    /*else{
           annoL.textContent = annoL.value;
       }*/
}
