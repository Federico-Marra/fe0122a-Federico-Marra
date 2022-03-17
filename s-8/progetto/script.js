fetch('abbigliamento.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var maglietta = new Capi(item.id, item.codprod, item.collezione, item.capo, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        console.log(maglietta);
        console.log('Lo sconto totale sarà di:' + ' ' + maglietta.getSaldoCapo().toFixed(2) + '€');
        console.log('Il costo in totale sarà di: ' + ' ' + maglietta.getAcquistoCapo().toFixed(2) + '€');
    });
});
var Capi = /** @class */ (function () {
    function Capi(id, codprod, collezione, capo, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        if (id === void 0) { id = 0; }
        if (codprod === void 0) { codprod = 0; }
        if (collezione === void 0) { collezione = ' '; }
        if (capo === void 0) { capo = ' '; }
        if (quantita === void 0) { quantita = 0; }
        if (colore === void 0) { colore = ' '; }
        if (prezzoivaesclusa === void 0) { prezzoivaesclusa = 0; }
        if (prezzoivainclusa === void 0) { prezzoivainclusa = 0; }
        if (disponibile === void 0) { disponibile = ' '; }
        if (saldo === void 0) { saldo = 0; }
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
    Capi.prototype.getSaldoCapo = function () {
        return (this.prezzoivainclusa * this.saldo) / 100;
    };
    Capi.prototype.getAcquistoCapo = function () {
        return this.prezzoivainclusa - this.getSaldoCapo();
    };
    return Capi;
}());
var pantaloni = new Capi(6, 1234, 'autunno', 'pantalone', 10, 'militare', 11, 13.5, 'non disponibile', 15);
var cargo = new Capi(6, 1234, 'primavera', 'pantalone', 3, 'nero', 12, 14.5, 'in arrivo!', 5);
var maglione = new Capi(6, 1234, 'inverno', 'maglione', 2, 'viola', 11, 13.5, 'in negozio', 50);
var div = document.createElement('div');
div;
console.log(pantaloni);
console.log('Lo sconto totale sarà di:' + ' ' + pantaloni.getSaldoCapo().toFixed(2) + '€');
console.log('Il costo in totale sarà di: ' + ' ' + pantaloni.getAcquistoCapo().toFixed(2) + '€');
console.log(cargo);
console.log('Lo sconto totale sarà di:' + ' ' + cargo.getSaldoCapo().toFixed(2) + '€');
console.log('Il costo in totale sarà di: ' + ' ' + cargo.getAcquistoCapo().toFixed(2) + '€');
console.log(maglione);
console.log('Lo sconto totale sarà di:' + ' ' + maglione.getSaldoCapo().toFixed(2) + '€');
console.log('Il costo in totale sarà di: ' + ' ' + maglione.getAcquistoCapo().toFixed(2) + '€');
