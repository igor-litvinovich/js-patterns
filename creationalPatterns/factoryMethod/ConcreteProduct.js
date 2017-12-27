const Product = require('./Product');

class ConcreteProduct extends Product {
    constructor() {
        super();
        console.log('ConcreteProduct created');
    }
}

module.exports = ConcreteProduct;