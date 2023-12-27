interface GUIFactory {
  createButton: () => Button;
  createCheckBox: () => CheckBox;
}

class WinFactory implements GUIFactory {
  createButton = (): Button => {
    return new WinButton();
  };
  createCheckBox = (): CheckBox => {
    return new WinCheckBox();
  };
}

class MacFactory implements GUIFactory {
  createButton = (): Button => {
    return new MacButton();
  };
  createCheckBox = (): CheckBox => {
    return new MacCheckBox();
  };
}

interface Button {
  paint(): void;
}

interface CheckBox {
  paint(): void;
}

class WinButton implements Button {
  paint() {
    console.log("paint win Button");
  }
}

class WinCheckBox implements CheckBox {
  paint() {
    console.log("paint win CheckBox");
  }
}

class MacButton implements Button {
  paint() {
    console.log("paint mac Button");
  }
}

class MacCheckBox implements CheckBox {
  paint() {
    console.log("paint mac CheckBox");
  }
}

const winFactory = new WinFactory();

const button = winFactory.createButton();
button.paint();
