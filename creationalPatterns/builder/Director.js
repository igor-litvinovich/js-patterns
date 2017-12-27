class Director {
    constructor(pizzaBuilder) {
        this._pizzaBuilder = pizzaBuilder;
        console.log("Director class created");
    }

    constructPizza() {
        this._pizzaBuilder.createNewPizza();
        this._pizzaBuilder.buildDough();
        this._pizzaBuilder.buildSouce();
        this._pizzaBuilder.buildTopping();
        const pizza = this._pizzaBuilder.getResult();
        return pizza;
    }
}

module.exports = Director;