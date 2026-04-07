"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarConRegla = validarConRegla;
exports.asegurarNoNulo = asegurarNoNulo;
exports.clonarArray = clonarArray;
function validarConRegla(valor, regla, mensajeError) {
    if (!regla(valor)) {
        throw new Error(mensajeError);
    }
    return valor;
}
function asegurarNoNulo(valor, nombreCampo) {
    if (valor === null || valor === undefined) {
        throw new Error(`El campo ${nombreCampo} es obligatorio.`);
    }
    return valor;
}
function clonarArray(items) {
    return items.map((item) => ({ ...item }));
}
