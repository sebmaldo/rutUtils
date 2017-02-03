const R = require('ramda');

function formatRUT(rut) {

    let nPos = 0;
    let sInvertido = '';

    for(let i = rut.length - 1; 0 <= i; i-- ){

        sInvertido += rut.charAt(i);

        if (i === rut.length - 1) {
            sInvertido += '-';
        }
        else if (3 === nPos){
            sInvertido += '.';
            nPos = 0;
        }

        nPos++;
    }

    return R.reverse(sInvertido.toUpperCase());

}

module.exports = {
    formatRUT: formatRUT
};