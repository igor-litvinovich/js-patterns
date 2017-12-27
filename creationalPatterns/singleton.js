class Singleton {
  constructor() {
    if (!Singleton._instance) {
      Singleton._instance = this;
    }
    return Singleton._instance;
  }

  getName() {
    return "My name is John";
  }
}

module.exports = Singleton;
