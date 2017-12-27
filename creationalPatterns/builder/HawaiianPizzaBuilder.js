const PizzaBuilder = require('./PizzaBuilder');

class HawaiianPizzaBuilder extends PizzaBuilder {
    constructor() {
        super();
    }

    buildDough() {
        this._pizza.dough = 'cross';
    }

    buildSouce() {
        this._pizza.sauce = 'cheese';
    }

    buildTopping() {
        this._pizza.topping = 'ham+pineapple';
    }

    getResult() {
        return this._pizza;
    }
}

module.exports = HawaiianPizzaBuilder;