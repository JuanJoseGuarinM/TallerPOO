export type Validador<T> = (valor: T) => boolean;

export function validarConRegla<T>(
  valor: T,
  regla: Validador<T>,
  mensajeError: string
): T {
  if (!regla(valor)) {
    throw new Error(mensajeError);
  }

  return valor;
}

export function asegurarNoNulo<T>(
  valor: T,
  nombreCampo: string
): NonNullable<T> {
  if (valor === null || valor === undefined) {
    throw new Error(`El campo ${nombreCampo} es obligatorio.`);
  }

  return valor as NonNullable<T>;
}

export function clonarArray<T extends object>(items: T[]): T[] {
  return items.map((item) => ({ ...item }));
}
