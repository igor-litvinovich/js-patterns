const Singleton = require('./Singleton');

module.exports = () => {
    const firstInstance = new Singleton('John Snow');
    console.log(`first instance name: ${firstInstance.name}`);
    const secondinstance = new Singleton('Jaime Lannister');
    console.log(`second instance name: ${secondinstance.name}`);
}