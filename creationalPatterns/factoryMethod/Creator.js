const ConcreteProduct = require('./ConcreteProduct');

class Creator {
    constructor() {
    }

    FactoryMethod (){

    }

    AnOperation (){
        console.log("AnOperation()")
        this.product = this.FactoryMethod()
        console.log('this.product instanceof ConcreteProduct:', this.product instanceof ConcreteProduct)
    }
}

module.exports = Creator;