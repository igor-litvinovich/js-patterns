const Pizza = require('./Pizza');

class PizzaBuilder {
    constructor() {
        this._pizza = null;
     }

    buildDough() { }

    buildSouce() { }

    buildTopping() { }
    
    createNewPizza(){
        this._pizza = new Pizza();
    }
}

module.exports = PizzaBuilder;