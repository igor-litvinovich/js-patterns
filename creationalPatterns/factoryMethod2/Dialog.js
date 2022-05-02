class Dialog {
    createButton() {
        throw Error('createButton must be implemented!')
    }

    render() {
        const button = this.createButton()
        button.render()
        button.onClick((message) => {
            console.log(message)
        })
    }
}

export default Dialog;
