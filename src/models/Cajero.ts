export class Cajero {
  private efectivoDisponible: number;

  constructor(efectivoInicial: number) {
    if (efectivoInicial < 0) {
      throw new Error("El efectivo inicial del cajero no puede ser negativo.");
    }

    this.efectivoDisponible = efectivoInicial;
  }

  public consultarEfectivoDisponible(): number {
    return this.efectivoDisponible;
  }

  public registrarDeposito(monto: number): void {
    if (monto <= 0) {
      throw new Error("El deposito debe ser mayor que cero.");
    }

    this.efectivoDisponible += monto;
  }

  public entregarEfectivo(monto: number): void {
    if (monto <= 0) {
      throw new Error("El retiro debe ser mayor que cero.");
    }

    if (monto > this.efectivoDisponible) {
      throw new Error("El cajero no tiene fondos suficientes.");
    }

    this.efectivoDisponible -= monto;
  }
}
