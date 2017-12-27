const Component = require('./Component');

class ConcreteComponent extends Component {
    constructor() {
        super();
        this._cost = 100;
        console.log('ConcreteComponent created');
    }

    get cost() {
        return this._cost;
    }
}
module.exports = ConcreteComponent;