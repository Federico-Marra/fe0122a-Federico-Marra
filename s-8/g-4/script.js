//input
var inptRicarica = document.querySelector('#ricarica');
var inptSaldo = document.querySelector('#saldo');
//bottoni
var btnRicarica = document.querySelector('#btn-ricarica');
var btnChiama = document.querySelector('#btn-chiama');
//class
var FirstUser = /** @class */ (function () {
    function FirstUser(contratto, numberCarica, numberChiamate, saldo) {
        this.contratto = contratto;
        this.numberCarica = numberCarica;
        this.numberChiamate = numberChiamate;
        this.saldo = saldo;
    }
    FirstUser.prototype.getRicarica = function () {
    };
    return FirstUser;
}());
//funzioni 
btnRicarica.addEventListener('click', function () {
    inptRicarica.value;
});
