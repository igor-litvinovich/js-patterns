const Decorator = require('./Decorator');

class ConcreteDecoratorA extends Decorator {
    constructor(component, tax) {
        super(component)
        this._tax = tax;
        console.log('ConcreteDecoratorA created')
    }

    get cost() {
        const initialCost = this.component.cost;
        return initialCost + this._tax;
    }
}

module.exports = ConcreteDecoratorA;