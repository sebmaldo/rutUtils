import test from 'ava';
import {obtenerDigitoVerificador} from '../build/obtenerDigitoVerificador';

test('Debe generar dv de ruts con formato', t => {
    t.is(obtenerDigitoVerificador('15.068.143'), 'K');
    t.is(obtenerDigitoVerificador('17.287.369'), '3');
});

test('Debe generar dv de ruts string y número', t => {
    t.is(obtenerDigitoVerificador('11964969'), '2');
    t.is(obtenerDigitoVerificador('22040581'), '8');
    t.is(obtenerDigitoVerificador('8523482'), 'K');
    t.is(obtenerDigitoVerificador(7215763), 'K');
    t.is(obtenerDigitoVerificador(24458283), '4');
    t.is(obtenerDigitoVerificador(18594112), '4');
    t.is(obtenerDigitoVerificador(24457294), '4' );
});
