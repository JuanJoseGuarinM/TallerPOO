import { Cajero } from "./models/Cajero";
import { CuentaBancaria } from "./models/CuentaBancaria";
import { CajeroService } from "./services/CajeroService";
import { clonarArray } from "./utils/validaciones";

function mostrarEstado(
  etiqueta: string,
  cuenta: CuentaBancaria,
  cajero: Cajero,
  servicio: CajeroService
): void {
  console.log(`\n${etiqueta}`);
  console.log(`Cuenta: ${cuenta.getNumeroCuenta()}`);
  console.log(`Saldo de cuenta: ${servicio.consultarSaldo(cuenta)}`);
  console.log(`Efectivo en cajero: ${cajero.consultarEfectivoDisponible()}`);
}

function ejecutarDemo(): void {
  const cuenta = new CuentaBancaria("0001-123", 500);
  const cajero = new Cajero(2000);
  const servicio = new CajeroService(cajero);

  mostrarEstado("Estado inicial", cuenta, cajero, servicio);

  try {
    servicio.depositar(cuenta, 250);
    mostrarEstado("Despues de depositar 250", cuenta, cajero, servicio);

    servicio.retirar(cuenta, 300);
    mostrarEstado("Despues de retirar 300", cuenta, cajero, servicio);

    // Caso de error: retiro mayor al saldo de la cuenta
    servicio.retirar(cuenta, 10000);
  } catch (error) {
    const mensaje = error instanceof Error ? error.message : "Error inesperado";
    console.error(`Error en operacion: ${mensaje}`);
  }

  // Uso de funcion generica con constraint
  const historial = [
    { tipo: "deposito", monto: 250 },
    { tipo: "retiro", monto: 300 }
  ];
  const historialClonado = clonarArray(historial);
  console.log("Historial original:", historial);
  console.log("Historial clonado:", historialClonado);
}

ejecutarDemo();
