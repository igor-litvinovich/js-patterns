const Builder = require('./Builder');
const Product = require('./Product');

class ConcreteBuilder extends Builder {
    constructor() {
        super();
        console.log("ConcreteBuilder class created");
    }

    BuildPart(rawmaterial) {
        console.log("ConcreteBuilder BuildPart()");
        var material = rawmaterial;
        this.product = new Product(material);
    }

    GetResult() {
        console.log(JSON.stringify(this.product));
        return this.product;
    }
}

module.exports = ConcreteBuilder;