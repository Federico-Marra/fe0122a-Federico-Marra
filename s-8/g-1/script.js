var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(deposito, prelievo) {
        this.deposito = deposito;
        this.prelievo = prelievo;
        this.saldoDisponibile = this.deposito - this.prelievo;
    }
    SonAccount.prototype.oneDeposit = function () {
        return this.deposito;
    };
    SonAccount.prototype.oneWithDraw = function () {
        return this.prelievo;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(deposito, prelievo, interesse, saldoDisponibile, detInteresse) {
        if (interesse === void 0) { interesse = 10; }
        var _this = _super.call(this, deposito, prelievo) || this;
        _this.interesse = interesse;
        _this.detInteresse = _this.balanceInit();
        _this.saldoDisponibile = (_this.deposito - _this.prelievo) - _this.balanceInit();
        return _this;
    }
    MotherAccount.prototype.addInterest = function () {
        return this.interesse;
    };
    MotherAccount.prototype.balanceInit = function () {
        return ((this.deposito - this.prelievo) * this.interesse) / 100;
    };
    return MotherAccount;
}(SonAccount));
var figlio = new SonAccount(1000, 30);
var madre = new MotherAccount(3000, 500, 10, 0, 0);
console.log(figlio);
console.log(madre);
