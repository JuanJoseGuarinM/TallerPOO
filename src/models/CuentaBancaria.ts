export interface ICuentaBancaria {
  consultarSaldo(): number;
  depositar(monto: number): void;
  retirar(monto: number): void;
}

export class CuentaBancaria implements ICuentaBancaria {
  private saldo: number;

  constructor(
    private readonly numeroCuenta: string,
    saldoInicial: number
  ) {
    if (saldoInicial < 0) {
      throw new Error("El saldo inicial no puede ser negativo.");
    }

    this.saldo = saldoInicial;
  }

  public getNumeroCuenta(): string {
    return this.numeroCuenta;
  }

  public consultarSaldo(): number {
    return this.saldo;
  }

  public depositar(monto: number): void {
    if (monto <= 0) {
      throw new Error("El monto a depositar debe ser mayor que cero.");
    }

    this.saldo += monto;
  }

  public retirar(monto: number): void {
    if (monto <= 0) {
      throw new Error("El monto a retirar debe ser mayor que cero.");
    }

    if (monto > this.saldo) {
      throw new Error("Fondos insuficientes en la cuenta.");
    }

    this.saldo -= monto;
  }
}
