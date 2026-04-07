"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cajero_1 = require("./models/Cajero");
const CuentaBancaria_1 = require("./models/CuentaBancaria");
const CajeroService_1 = require("./services/CajeroService");
const validaciones_1 = require("./utils/validaciones");
function mostrarEstado(etiqueta, cuenta, cajero, servicio) {
    console.log(`\n${etiqueta}`);
    console.log(`Cuenta: ${cuenta.getNumeroCuenta()}`);
    console.log(`Saldo de cuenta: ${servicio.consultarSaldo(cuenta)}`);
    console.log(`Efectivo en cajero: ${cajero.consultarEfectivoDisponible()}`);
}
function ejecutarDemo() {
    const cuenta = new CuentaBancaria_1.CuentaBancaria("0001-123", 500);
    const cajero = new Cajero_1.Cajero(2000);
    const servicio = new CajeroService_1.CajeroService(cajero);
    mostrarEstado("Estado inicial", cuenta, cajero, servicio);
    try {
        servicio.depositar(cuenta, 250);
        mostrarEstado("Despues de depositar 250", cuenta, cajero, servicio);
        servicio.retirar(cuenta, 300);
        mostrarEstado("Despues de retirar 300", cuenta, cajero, servicio);
        // Caso de error: retiro mayor al saldo de la cuenta
        servicio.retirar(cuenta, 10000);
    }
    catch (error) {
        const mensaje = error instanceof Error ? error.message : "Error inesperado";
        console.error(`Error en operacion: ${mensaje}`);
    }
    // Uso de funcion generica con constraint
    const historial = [
        { tipo: "deposito", monto: 250 },
        { tipo: "retiro", monto: 300 }
    ];
    const historialClonado = (0, validaciones_1.clonarArray)(historial);
    console.log("Historial original:", historial);
    console.log("Historial clonado:", historialClonado);
}
ejecutarDemo();
