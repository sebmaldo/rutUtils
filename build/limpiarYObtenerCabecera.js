"use strict";
var R = require("ramda");
/**
 * Función que recibe un string y lo entrega sin su último dígito any
 * sin puntos ni guiones.
 *
 * @param {string} rut - Rut para sacar puntos y guiones y último dígito.
 * @returns {string} - Rut sin puntos sin el dígito verificador y sin puntos ni guiones.
 */
exports.limpiarYObtenerCabecera = function (rut) { return R.pipe((R.take(R.length(rut) - 1)), (R.replace(/\.|-/g, '')))(rut); };
