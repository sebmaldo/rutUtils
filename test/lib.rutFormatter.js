import test from 'ava';
import rutFormatter from '../lib/rutFormatter';

test('Return must be equal to `15.649.137-3`', t => {

    let result = rutFormatter.formatRUT('156491373');

    t.is(result, '15.649.137-3');

});

test('Return must be equal to `9.457.904-K`', t => {

    let result = rutFormatter.formatRUT('9457904k');

    t.is(result, '9.457.904-K');

});