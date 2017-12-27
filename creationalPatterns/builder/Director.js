const ConcreteBuilder = require('./ConcreteBuilder');

class Director {
    constructor() {
        this.structure = ["Maze", "Wall", "Door"];
        console.log("Director class created");
    }

    Construct() {
        this.structure.forEach(item => {
            let builder = new ConcreteBuilder();
            builder.BuildPart(item);
            const result = builder.GetResult();
            console.log(`Director.Construct result: ${JSON.stringify(result)}`);
        });
    }
}

module.exports = Director;