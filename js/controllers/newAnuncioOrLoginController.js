import BaseController from "./BaseController.js";
import DataService from "../service/DataService.js";

export default class NewAnuncioOrLoginController extends BaseController {
  constructor(elemento) {
    super(elemento);
    this.chequearUsuarioConAcceso();
  }

  async chequearUsuarioConAcceso() {
    const usuarioAcceso = await DataService.usuarioConAcceso();
    if (usuarioAcceso) {
      console.log("usuario tiene acceso");
      const newAnuncioButton = this.elemento.querySelector(
        ".new-anuncio-button"
      );
      newAnuncioButton.classList.remove("is-hidden");
    } else {
      console.log("usuario no tiene acceso");
      const accesoRegistrarseButton = this.elemento.querySelector(
        ".acceso-registrarse-buttons"
      );
      accesoRegistrarseButton.classList.remove("is-hidden");
    }
  }
}
