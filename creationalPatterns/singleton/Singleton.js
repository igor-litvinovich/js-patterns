class Singleton {
  constructor(name) {
    this._name = name;
    if (!Singleton._instance) {
      Singleton._instance = this;
      console.log('new Singleton instance has been created.');
    }
    return Singleton._instance;
  }

  get name() {
    return this._name;
  }
}

export default Singleton;
