const TestClass = require('./test-class');

let testInstance = new TestClass('a');
let concat = testInstance.testMethod('b');

console.log(concat);