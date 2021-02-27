import BaseController from "./BaseController.js";
import DataService from "../service/DataService.js";
import { vistaAnuncio } from "../view/view.js";

export default class PostsDetailsController extends BaseController {
  anuncioDetallado(anuncio) {
    let url = new URL(window.location.href);
    let id = url.searchParams.get("id");

    for (const anuncioDetalle of anuncio) {
      if (anuncioDetalle.id == id) {
        const article = document.createElement("article");
        article.innerHTML = vistaAnuncio(anuncioDetalle);
        this.elemento.appendChild(article);

        const borrarButton = article.querySelector("button");
        if (borrarButton) {
          borrarButton.addEventListener("click", async (evento) => {
            const confirmacionBorrado = confirm(
              "¿seguro que quieres borrar el anuncio?"
            );
            if (confirmacionBorrado) {
              console.log("borrar el anuncio", confirmacionBorrado);
              await DataService.borrarAnuncio(anuncioDetalle);
              article.remove();
              window.location.href='/index.html';
            }
          });
        }
      }
    }
  }

  async cargarAnuncio() {
    this.PubSub.publish(this.eventos.START_LOADING, {});
    // this.cargando.mostarLoader()
    try {
      const anuncios = await DataService.obtenerAnuncios();
      this.anuncioDetallado(anuncios);
    } catch (error) {
      console.error(error);
      this.PubSub.publish(this.eventos.ERROR, error);
    } finally {
      //  this.cargando.ocultarLoader()
      this.PubSub.publish(this.eventos.FINISH_LOADING, {});
    }
  }
}
