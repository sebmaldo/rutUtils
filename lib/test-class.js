/**
 * Clase de Mailgun, construida sobre mailgunjs  para envio de correos de campanas
 */
class TestClass  {
    /**
     * @constructor
     * @param {String} somevalue - Some random string
     */
    constructor(somevalue) {
        this.somevalue = somevalue;
    }

    /**
     * No idea about this method
     * @param {String} someCharacter - Some random character
     * @returns {String} A concat string between this.somevalue and passed arg
     */
    testMethod (someCharacter) {
        return `${this.somevalue}-${someCharacter}`;
    }
}

module.exports = TestClass;