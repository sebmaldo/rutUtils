import test from 'ava';
import validarRut from '../lib/validarRut';


test('Debe validar ruts con formato', t => {
    t.is(validarRut('15.068.143-k'), true);
    t.is(validarRut('17.287.369-3'), true);
    t.is(validarRut('17.692.128-3'), false);
});

test('Debe validar rut generados', t => {
    t.is(validarRut('119649692'), true);
    t.is(validarRut('220405818'), true);
    t.is(validarRut('8523482K'), true);
    t.is(validarRut('7215763k'), true);
    t.is(validarRut('152221143'), false);
    t.is(validarRut('244582834'), true);
    t.is(validarRut('185941124'), true);
    t.is(validarRut('118064542'), true);
    t.is(validarRut('158606676'), false);
    t.is(validarRut('244572944'), true);
});

test('Undefined y vacío debe ser false', t => {
    t.is(validarRut(undefined), false);
    t.is(validarRut(null), false);
    t.is(validarRut(NaN), false);
    t.is(validarRut(''), false);
});