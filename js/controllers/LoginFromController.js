import BaseController from "./BaseController.js";
import DataService from "../service/DataService.js";

export default class LoginFormController extends BaseController {
  constructor(elemento) {
    super(elemento);
    this.attachEventListener();
  }

  attachEventListener() {
    this.elemento.addEventListener("submit", async (evento) => {
      evento.preventDefault(); // evita que se enví el formulario (comportamiento por defecto)
      const user = {
        username: this.elemento.elements.email.value,
        password: this.elemento.elements.password.value,
      };
      this.publish(this.eventos.START_LOADING);
      try {
        const data = await DataService.login(user);
        console.log("login ok ", data);
        DataService.guardarToken(data.accessToken);
        let next = "/";
        const queryParams = window.location.search.replace("?", ""); // ?next=otrapagina -> next=otrapagina
        const queryParamsParts = queryParams.split("=");
        if (queryParamsParts.length >= 2 && queryParamsParts[0] === "next") {
          next = queryParamsParts[1];
        }
        window.location.href = next;
      } catch (error) {
        this.publish(this.eventos.ERROR, error);
      } finally {
        this.publish(this.eventos.FINISH_LOADING);
      }
    });

    this.elemento.querySelectorAll("input").forEach((input) => {
      const button = this.elemento.querySelector("button");
      input.addEventListener("keyup", (event) => {
        console.log("estoy escribiendo ", this.elemento.checkValidity());
        // si el input es OK lo marco en verde, si no, en rojo
        if (input.validity.valid) {
          input.classList.add("is-success");
          input.classList.remove("is-danger");
        } else {
          input.classList.remove("is-success");
          input.classList.add("is-danger");
        }

        // valido si todo el formulario es OK para habilitar o deshabilitar el botón
        if (this.elemento.checkValidity()) {
          button.removeAttribute("disabled");
          // button.setAttribute('disabled', false); // esto también valdría
        } else {
          button.setAttribute("disabled", true);
        }
      });
    });
  }
}
