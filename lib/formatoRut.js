const R = require('ramda');
const lyc = require('./limpiarYObtenerCabecera');

let milInv = (rut) => {
    return 3 < R.length(rut) ?
        `${R.take(3, rut)}.${milInv(R.takeLast(R.length(rut)-3, rut))}` :
        rut;
};

module.exports = (rut) => {
    let formater = R.pipe(
        lyc,
        R.reverse,
        milInv,
        R.reverse
    );

    return 1 < R.length(rut) ?
        R.toUpper(`${formater(rut)}-${R.last(rut)}`) :
        rut;
};