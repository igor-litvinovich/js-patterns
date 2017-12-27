const Creator = require('./Creator');
const ConcreteProduct = require('./ConcreteProduct');

class ConcreteCreator extends Creator {

    constructor() {
        super()
        console.log('ConcreteCreator created')
    }

    FactoryMethod() {
        return new ConcreteProduct();
    }
}

module.exports = ConcreteCreator;