import test from 'ava';
import {limpiarYObtenerCabecera} from '../build/limpiarYObtenerCabecera';

test('Debe entregar 15068143', t => {
    let result = limpiarYObtenerCabecera('15.068.143-K');
    t.is(result, '15068143');
});