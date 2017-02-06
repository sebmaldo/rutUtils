import test from 'ava';
import lyc from '../lib/limpiarYObtenerCabecera';

test('Debe entregar 15068143', t => {
    let result = lyc('15.068.143-K');
    t.is(result, '15068143');
});