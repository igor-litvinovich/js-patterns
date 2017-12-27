module.exports = () => {
    const ConcreteComponent = require('./ConcreteComponent');
    const ConcreteDecoratorA = require('./ConcreteDecoratorA');
    const ConcreteDecoratorB = require('./ConcreteDecoratorB');

    const component = new ConcreteComponent();
    const decoratorA = new ConcreteDecoratorA(component, 10);
    const decoratorB = new ConcreteDecoratorB(decoratorA, 1);

    console.log(`component ${component.cost}`);
    console.log(`decoratorA ${decoratorA.cost}`);
    console.log(`decoratorB ${decoratorB.cost}`);
}