import test from 'ava';
import TestClass from '../lib/test-class.js';

let testInstance = new TestClass('a');

test('Test 1', t => {
    t.pass();
});

test('Return must be equal to `a-b`', t => {
    t.is(testInstance.testMethod('b'), 'a-b');
});