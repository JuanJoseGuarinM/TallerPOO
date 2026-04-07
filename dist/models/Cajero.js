"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cajero = void 0;
class Cajero {
    constructor(efectivoInicial) {
        if (efectivoInicial < 0) {
            throw new Error("El efectivo inicial del cajero no puede ser negativo.");
        }
        this.efectivoDisponible = efectivoInicial;
    }
    consultarEfectivoDisponible() {
        return this.efectivoDisponible;
    }
    registrarDeposito(monto) {
        if (monto <= 0) {
            throw new Error("El deposito debe ser mayor que cero.");
        }
        this.efectivoDisponible += monto;
    }
    entregarEfectivo(monto) {
        if (monto <= 0) {
            throw new Error("El retiro debe ser mayor que cero.");
        }
        if (monto > this.efectivoDisponible) {
            throw new Error("El cajero no tiene fondos suficientes.");
        }
        this.efectivoDisponible -= monto;
    }
}
exports.Cajero = Cajero;
