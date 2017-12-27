const HawaiianPizzaBuilder = require('./HawaiianPizzaBuilder');
const Director = require('./Director');
module.exports = () => {
    const hawaiianPizzaBuilder = new HawaiianPizzaBuilder();
    const director = new Director(hawaiianPizzaBuilder);
    const pizza = director.constructPizza();
    console.log(`Pizza has been constructed : ${JSON.stringify(pizza)}`);
}