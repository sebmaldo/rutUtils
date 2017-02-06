const R = require('ramda');

let milInv = (rut) => {
    return 3 < R.length(rut) ?
        `${R.take(3, rut)}.${milInv(R.takeLast(R.length(rut)-3, rut))}` :
        rut;
};

let fRut = (rut) => {
    let formater = R.pipe(
        R.take(R.length(rut)-1),
        R.replace(/\.|-/g, ''),
        R.reverse,
        milInv,
        R.reverse
    );

    return 1 < R.length(rut) ?
        R.toUpper(`${formater(rut)}-${R.last(rut)}`) :
        rut;
};

module.exports = {
    formatRUT: fRut
};