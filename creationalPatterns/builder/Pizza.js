class Pizza {
    constructor() {
        console.log("Pizza class created");
        this._dough = null;
        this._sauce = null;
        this._topping  = null;
    }

    set dough(dough) {
        this._dough = dough;
    }
    set sauce(sauce) {
        this._sauce = sauce;
    }
    set topping (topping) {
        return this._topping = topping;
    }
}

module.exports = Pizza;