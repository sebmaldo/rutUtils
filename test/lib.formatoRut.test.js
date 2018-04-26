import test from 'ava';
import { formatoRut } from '../build/formatoRut';

test('Debe retornar `15.649.137-3`', t => {
    let result = formatoRut('156491373');
    t.is(result, '15.649.137-3');
});

test('Debe retornar `9.457.904-K`', t => {
    let result = formatoRut('9457904k');
    t.is(result, '9.457.904-K');
});

test('Debe retornar to `1`', t => {
    let result = formatoRut('1');
    t.is(result, '1');
});


test('Debe retornar to `15.068-1`', t => {
    let result = formatoRut('15.068.1-');
    t.is(result, '15.068-1');
});