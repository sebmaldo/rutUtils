import * as  R from 'ramda';
import {limpiarYObtenerCabecera} from './limpiarYObtenerCabecera';

/**
 * Función recursive que retorma un número con separador de miles, pero
 * invertido, es decir, desde 4444 retorna 444.4
 *
 * @param {string} rut - String para dar formato de miles invertido.
 * @return {string} - String con separador de miles invertido.
 */
let milInv = (rut) => {
    return 3 < R.length(rut) ?
        `${R.take(3, rut)}.${milInv(R.takeLast(R.length(rut)-3, rut))}` :
        rut;
};

/**
 * Función que recive un string y retorna el mismo string si es de largo 1
 * si no, toma el string le saca el último caractér, saca los puntos y guiones
 * y lo invierte, lo deja en formato de miles invertido, lo vuelve a invertir
 * y lo concatena con un guión y su último dígito.
 *
 * @param {string} rut - Rut para ser formateado
 * @returns {string} - String con el rut en formato XX.XXX.XXX-X
 */
export const formatoRut = (rut:string) => {
    let formater = R.pipe(
            limpiarYObtenerCabecera,
            R.reverse,
            milInv,
            R.reverse
        );

    let formatPipe = R.pipe(
            R.replace(/\.|-/g, ''),
            ((r:any) => 1 < R.length(r) ? R.toUpper(`${formater(r)}-${R.last(r)}`) : r));

    return formatPipe(<string>rut);
};