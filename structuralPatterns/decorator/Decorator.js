const Component = require('./Component');

class Decorator extends Component {
    constructor(component) {
        super()
        this.component = component
        console.log('Decorator created')
    }

    get cost() {
        return this.component.cost;
    }
}

module.exports = Decorator;