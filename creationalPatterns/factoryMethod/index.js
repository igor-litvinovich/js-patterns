const ConcreteCreator = require('./ConcreteCreator');

module.exports = () => {
    const concreteCreator = new ConcreteCreator();
    concreteCreator.AnOperation();
}