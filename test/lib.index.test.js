import test from 'ava';
import rutUtils from '../build/index';

test('Debe validar el rut 15.068.143-K', t => {
    let respose = rutUtils.validarRut('15.068.143-K');
    t.is(respose, true);
});

test('No debe validar el rut 15.068.143-3', t => {
    let respose = rutUtils.validarRut('15.068.143-3');
    t.is(respose, false);
});

test('Debe formatear rut 15068143k a 15.068.143-K', t => {
    let respose = rutUtils.formatoRut('15068143k');
    t.is(respose, '15.068.143-K');
});

test('Debe formatear rut 1 a 1', t => {
    let respose = rutUtils.formatoRut('1');
    t.is(respose, '1');
});

test('Debe formatear rut 1k a 1-K', t => {
    let respose = rutUtils.formatoRut('1k');
    t.is(respose, '1-K');
});

test('Debe formatear rut 681435 a 68.143-5', t => {
    let respose = rutUtils.formatoRut('681435');
    t.is(respose, '68.143-5');
});

test('Debe formatear rut " 156491373" a "15.649.137-3"', t => {
    let respose = rutUtils.formatoRut(' 156491374');
    t.is(respose, '15.649.137-4');
});

test('Debe formatear rut " 15.649.137-4" a "15.649.137-4"', t => {
    let respose = rutUtils.formatoRut(' 15.649.137-4');
    t.is(respose, '15.649.137-4');
});

test('Debe entregar digito verificador de 15068143 como K', t => {
    let response = rutUtils.obtenerDigitoVerificador('15.068.143');
    t.is(response, 'K');
    response = rutUtils.obtenerDigitoVerificador('15068143');
    t.is(response, 'K');
    response = rutUtils.obtenerDigitoVerificador(15068143);
    t.is(response, 'K');
});