const Decorator = require('./Decorator');

class ConcreteDecoratorB extends Decorator {
    constructor(component, tax) {
        super(component)
        this._tax = tax;
        console.log('ConcreteDecoratorB created')
    }

    get cost() {
        const initialCost = this.component.cost;
        return initialCost + this._tax;
    }
}

module.exports = ConcreteDecoratorB;