import PostsDetailsController from "./controllers/PostDetailsController.js";
import LoaderController from "./controllers/LoaderController.js";
import ErrorController from "./controllers/ErrorController.js";
import NewAnuncioOrLoginController from "./controllers/newAnuncioOrLoginController.js";

window.addEventListener("DOMContentLoaded", (evento) => {
  const cargando = document.querySelector(".lds-ring");
  const loaderController = new LoaderController(cargando);

  const elemento = document.querySelector(".posts-list");
  const controller = new PostsDetailsController(elemento);
  controller.cargarAnuncio();

  const errorElemento = document.querySelector(".global-errors");
  const errorController = new ErrorController(errorElemento);

  const newAnuncioButton = document.querySelector(".new-anuncio");
  const newAnuncioConAcceso = new NewAnuncioOrLoginController(newAnuncioButton);
});
