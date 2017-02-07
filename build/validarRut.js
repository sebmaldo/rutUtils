"use strict";
var R = require("ramda");
var obtenerDigitoVerificador_1 = require("./obtenerDigitoVerificador");
/**
 * Función que recibe un rut y verifica si es válido o no.
 *
 * @param {string} rut - Rut a ser revisado.
 * @returns {boolean} - True o False que indíca si el rut es válido.
 */
exports.validarRut = function (rut) {
    return rut ?
        R.equals(R.toUpper(R.last(rut)), obtenerDigitoVerificador_1.obtenerDigitoVerificador(R.init(rut))) :
        false;
};
