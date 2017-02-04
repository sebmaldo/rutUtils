const R = require('ramda');

let dvRecursivo = R.curry((acum, mult, rut) => {
    let dv = (a) => (a ? R.dec(a) : 'k');
    return rut ?
        dvRecursivo((acum+rut%10*(9-mult%6))%11, mult+1, Math.floor(rut/10)) :
        dv(acum);
});

let obtenerDv = (rut) => {
    let primeraParte = (obj) =>  R.take(obj.length-1, obj);
    return R.pipe(
        R.replace(/\.|-/g, ''),
        primeraParte,
        dvRecursivo(1, 0)
    )(rut).toString();
};

module.exports = (rut) => {
    return R.equals(R.toLower(R.last(rut)), obtenerDv(rut));
};

