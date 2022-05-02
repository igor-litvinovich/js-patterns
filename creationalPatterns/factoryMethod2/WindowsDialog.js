import Dialog from "./Dialog.js";
import WindowsButton from "./WindowsButton.js";

class WindowsDialog extends Dialog {
    createButton() {
        return new WindowsButton();
    }
}

export default WindowsDialog;
