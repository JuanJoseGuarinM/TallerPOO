"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaBancaria = void 0;
class CuentaBancaria {
    constructor(numeroCuenta, saldoInicial) {
        this.numeroCuenta = numeroCuenta;
        if (saldoInicial < 0) {
            throw new Error("El saldo inicial no puede ser negativo.");
        }
        this.saldo = saldoInicial;
    }
    getNumeroCuenta() {
        return this.numeroCuenta;
    }
    consultarSaldo() {
        return this.saldo;
    }
    depositar(monto) {
        if (monto <= 0) {
            throw new Error("El monto a depositar debe ser mayor que cero.");
        }
        this.saldo += monto;
    }
    retirar(monto) {
        if (monto <= 0) {
            throw new Error("El monto a retirar debe ser mayor que cero.");
        }
        if (monto > this.saldo) {
            throw new Error("Fondos insuficientes en la cuenta.");
        }
        this.saldo -= monto;
    }
}
exports.CuentaBancaria = CuentaBancaria;
