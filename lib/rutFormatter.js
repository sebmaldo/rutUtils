const R = require('ramda');

let milInv = (rut) => {
    return 3 < rut.length ?
        `${R.take(3, rut)}.${milInv(R.takeLast(rut.length-3, rut))}` :
        rut;
};

let fRut = (rut) => {
    let formater = R.pipe(
        R.take(rut.length-1),
        R.replace(/\.|-/g, ''),
        R.reverse,
        milInv,
        R.reverse
    );
    return R.toUpper(`${formater(rut)}-${R.last(rut)}`);
};

module.exports = {
    formatRUT: fRut
};