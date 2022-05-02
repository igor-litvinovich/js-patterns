import Dialog from "./Dialog.js";
import WebButton from "./WebButton.js";

class WebDialog extends Dialog {
    createButton() {
        return new WebButton();
    }
}

export default WebDialog;
