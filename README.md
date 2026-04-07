# Taller: Sistema de Cajero Automatico (POO + TypeScript)

Este proyecto implementa un sistema basico de cajero automatico con TypeScript en modo estricto.

## Arquitectura usada

Se usa **arquitectura por capas**:

- `models`: entidades del dominio (`CuentaBancaria`, `Cajero`)
- `services`: logica de negocio (`CajeroService`)
- `utils`: utilidades compartidas (`validaciones`)
- `index.ts`: capa de presentacion simple (consola)

### Por que tiene sentido usar capas en este taller

- Separa responsabilidades para que el codigo sea facil de entender y mantener.
- Permite probar la logica de negocio sin depender de interfaces graficas.
- Escala mejor: se puede cambiar la UI o la persistencia sin romper el dominio.

## Genéricos usados

Se incluyen funciones genericas:

- `validarConRegla<T>`: valida cualquier tipo segun una regla.
- `asegurarNoNulo<T>`: garantiza valores no nulos.
- `clonarArray<T extends object>`: ejemplo de constraint para clonar arreglos de objetos.

## Requisitos cubiertos

- Clase de dominio: `CuentaBancaria` y `Cajero`
- Funcion generica con sentido: `validarConRegla<T>`
- Uso de interfaces: `ICuentaBancaria`, `ICajeroService`
- Manejo de errores con mensajes claros
- Compatibilidad con TypeScript estricto (`strict: true`)
- Prueba manual en consola en `src/index.ts`

## Instalacion y ejecucion

```bash
npm install
npm run build
npm start
```

## Caso de prueba manual incluido

Flujo en consola:

1. Estado inicial de cuenta y cajero.
2. Deposito exitoso.
3. Retiro exitoso.
4. Retiro fallido por fondos insuficientes de la cuenta (error controlado).
