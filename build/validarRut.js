"use strict";
var R = require("ramda");
var limpiarYObtenerCabecera_1 = require("./limpiarYObtenerCabecera");
/**
 * Función recursiva para obtener dígito verificador, recibe un acumulador para
 * ir dejando los resultador parciales, un multiplicador para el cálculo y el
 * rut a ser revisado.
 *
 * @param {number} acum - Acumulador para función recursiva, se debe inicializar con 1.
 * @param {number} mult - Multiplicador a ser utilizado en el cálculo de dígito verificaro.
 * @param {number} rut - Parte numérica del rut a ser calculado el dígito.
 * @returns {string} - Retorna el dígito verificador a ser utilizado.
 */
var dvRecursivo = R.curry(function (acum, mult, rut) {
    /**
     * Función que retorna el acumulador menos uno si no es cero y k en caso de ser cero.
     *
     * @param {number} a - Acumulador para obtener dígito verificador.
     * @return {string} - retorna un string con el dígito verificador.
     */
    var dv = function (a) { return (a ? R.toString(R.dec(a)) : 'K'); };
    return rut ?
        dvRecursivo((acum + rut % 10 * (9 - mult % 6)) % 11, mult + 1, Math.floor(rut / 10)) :
        dv(acum);
});
/**
 * Función de pipe para obtener el dígito verificador, primero limpia el rut
 * para dejarlo sin puntos ni guión y sin dígito verificador.
 *
 * @param {string} rut - Rut para ser validado
 * @returns {string} - Dígito verificador que corresponde según el rut.
 */
var obtenerDv = R.pipe(limpiarYObtenerCabecera_1.limpiarYObtenerCabecera, dvRecursivo(1, 0));
/**
 * Función que recibe un rut y verifica si es válido o no.
 *
 * @param {string} rut - Rut a ser revisado.
 * @returns {boolean} - True o False que indíca si el rut es válido.
 */
exports.validarRut = function (rut) {
    return rut ?
        R.equals(R.toUpper(R.last(rut)), obtenerDv(rut)) :
        false;
};
