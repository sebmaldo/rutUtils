import * as  R from 'ramda';
import {obtenerDigitoVerificador} from './obtenerDigitoVerificador';


/**
 * Función que recibe un rut y verifica si es válido o no.
 *
 * @param {string} rut - Rut a ser revisado.
 * @returns {boolean} - True o False que indíca si el rut es válido.
 */
export const validarRut = (rut: string) => {
    return rut ?
        R.equals(R.toUpper(R.last(rut)), obtenerDigitoVerificador(R.init(rut))) :
        false;
};