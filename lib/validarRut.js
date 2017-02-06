const R = require('ramda');
const lyc = require('./limpiarYObtenerCabecera');

let dvRecursivo = R.curry((acum, mult, rut) => {
    let dv = (a) => (a ? R.dec(a) : 'K');
    return rut ?
        dvRecursivo((acum+rut%10*(9-mult%6))%11, mult+1, Math.floor(rut/10)) :
        dv(acum);
});

let obtenerDv = (rut) => {
    return R.pipe(
        lyc,
        dvRecursivo(1, 0)
    )(rut).toString();
};

module.exports = (rut) => {
    return R.equals(R.toUpper(R.last(rut)), obtenerDv(rut));
};

