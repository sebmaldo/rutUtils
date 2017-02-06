const R = require('ramda');
module.exports = (rut) => R.pipe(
    R.take(R.length(rut)-1),
    R.replace(/\.|-/g, '')
    )(rut);