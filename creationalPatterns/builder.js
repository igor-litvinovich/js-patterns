class Director {
  constructor() {
    this.structure = ["Maze", "Wall", "Door"];
    console.log("Director class created");
  }

  Construct() {
    this.structure.forEach(item => {
      let builder = new ConcreteBuilder();
      builder.BuildPart(item);
      builder.GetResult();
    });
  }
}

class Builder {
  constructor() {}

  BuildPart() {}
}

class ConcreteBuilder extends Builder {
  constructor() {
    super();
    console.log("ConcreteBuilder class created");
  }

  BuildPart(rawmaterial) {
    console.log("ConcreteBuilder BuildPart()");
    var material = rawmaterial;
    this.product = new Product(material);
  }

  GetResult() {
    console.log(JSON.stringify(this.product));
    return this.product;
  }
}

class Product {
  constructor(material) {
    console.log("Product class created");
    this.data = material;
  }
}


module.exports = { Director, ConcreteBuilder };
