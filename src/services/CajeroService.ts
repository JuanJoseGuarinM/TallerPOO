import { Cajero } from "../models/Cajero";
import { CuentaBancaria } from "../models/CuentaBancaria";
import { asegurarNoNulo, validarConRegla } from "../utils/validaciones";

export interface ICajeroService {
  consultarSaldo(cuenta: CuentaBancaria): number;
  depositar(cuenta: CuentaBancaria, monto: number): void;
  retirar(cuenta: CuentaBancaria, monto: number): void;
}

export class CajeroService implements ICajeroService {
  constructor(private readonly cajero: Cajero) {}

  public consultarSaldo(cuenta: CuentaBancaria): number {
    const cuentaValida = asegurarNoNulo(cuenta, "cuenta");
    return cuentaValida.consultarSaldo();
  }

  public depositar(cuenta: CuentaBancaria, monto: number): void {
    const cuentaValida = asegurarNoNulo(cuenta, "cuenta");
    const montoValido = validarConRegla(
      monto,
      (valor) => valor > 0,
      "El monto de deposito debe ser mayor que cero."
    );

    cuentaValida.depositar(montoValido);
    this.cajero.registrarDeposito(montoValido);
  }

  public retirar(cuenta: CuentaBancaria, monto: number): void {
    const cuentaValida = asegurarNoNulo(cuenta, "cuenta");
    const montoValido = validarConRegla(
      monto,
      (valor) => valor > 0,
      "El monto de retiro debe ser mayor que cero."
    );

    if (montoValido > this.cajero.consultarEfectivoDisponible()) {
      throw new Error("Operacion rechazada: el cajero no tiene fondos suficientes.");
    }

    cuentaValida.retirar(montoValido);
    this.cajero.entregarEfectivo(montoValido);
  }
}
