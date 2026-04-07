"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CajeroService = void 0;
const validaciones_1 = require("../utils/validaciones");
class CajeroService {
    constructor(cajero) {
        this.cajero = cajero;
    }
    consultarSaldo(cuenta) {
        const cuentaValida = (0, validaciones_1.asegurarNoNulo)(cuenta, "cuenta");
        return cuentaValida.consultarSaldo();
    }
    depositar(cuenta, monto) {
        const cuentaValida = (0, validaciones_1.asegurarNoNulo)(cuenta, "cuenta");
        const montoValido = (0, validaciones_1.validarConRegla)(monto, (valor) => valor > 0, "El monto de deposito debe ser mayor que cero.");
        cuentaValida.depositar(montoValido);
        this.cajero.registrarDeposito(montoValido);
    }
    retirar(cuenta, monto) {
        const cuentaValida = (0, validaciones_1.asegurarNoNulo)(cuenta, "cuenta");
        const montoValido = (0, validaciones_1.validarConRegla)(monto, (valor) => valor > 0, "El monto de retiro debe ser mayor que cero.");
        if (montoValido > this.cajero.consultarEfectivoDisponible()) {
            throw new Error("Operacion rechazada: el cajero no tiene fondos suficientes.");
        }
        cuentaValida.retirar(montoValido);
        this.cajero.entregarEfectivo(montoValido);
    }
}
exports.CajeroService = CajeroService;
