/**
 * Esto representa el producto a ser creado por la factory
 */
interface Button {
  render: () => void;
  onClick: () => void;
}

//Clase creadora
abstract class Dialog {
  abstract createButton(): Button; // los metodos abstractos representan los metodos que deben ser implementados en las variaciones ya que tienene su propia logica pero mantienen el mimso nombre
  render() {
    const okButton = this.createButton();
    okButton.onClick();
    okButton.render();
    console.log("render dialog");
    return this;
  }
}

//Producto
class LinuxButton implements Button {
  render() {
    console.log("render linux button");
  }
  onClick() {
    console.log("click linux button");
  }
}

class WindowsButton implements Button {
  render() {
    console.log("render windows button");
  }
  onClick() {
    console.log("click windows button");
  }
}

//Producto con sus variaciones
class LinuxDialog extends Dialog {
  createButton(): Button {
    return new LinuxButton();
  }
}

class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowsButton();
  }
}

const dialog = new WindowsDialog();
dialog.render();
