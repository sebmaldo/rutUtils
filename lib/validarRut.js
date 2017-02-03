const R = require('ramda');


let dvPartialRut = (rutSinDigito) => {
    let reductor = { rut: rutSinDigito, multiplicador: 0, acumulador: 1};
    let calculo = (obj) => (obj.acumulador + obj.rut%10*(9-obj.multiplicador%6))%11;
    let setAcum = (obj) => R.set(R.lensProp('acumulador'), calculo(obj), obj);
    let setRutTemp = (obj) => R.set(R.lensProp('rut'), Math.floor(obj.rut/10), obj);
    let incMult = (obj) => R.set(R.lensProp('multiplicador'), R.inc(obj.multiplicador), obj);
    let reduceRut = R.pipe(setAcum, setRutTemp, incMult);
    let obtenerAcumulador = (obj) => R.prop('acumulador',
        R.until(R.complement(R.prop('rut')), reduceRut)(obj));
    let cacularDigito = (acum) => acum ? R.dec(acum) : 'k';
    return R.pipe(obtenerAcumulador, cacularDigito)(reductor);
};

let obtenerDv = (rut) => {
    let primeraParte = (obj) =>  R.take(obj.length-1, obj);
    return R.pipe(
        R.replace(/\./g, ''),
        R.replace(/-/g, ''),
        primeraParte,
        dvPartialRut
    )(rut).toString();
};

module.exports = (rut) => {
    return R.equals(R.last(rut), obtenerDv(rut));
};

