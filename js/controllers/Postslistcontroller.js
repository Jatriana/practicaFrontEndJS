import BaseController from "./BaseController.js";
import DataService from "../service/DataService.js";
import { vistaAnuncio } from "../view/view.js";

export default class PostsListController extends BaseController {
  pintarAnuncios(anuncios) {

    this.elemento.innerHTML = '';
    for (const anuncio of anuncios) {
      const article = document.createElement("article");

      article.innerHTML = vistaAnuncio(anuncio);
         

      //logigas de borrar el anuncio
      const borrarButton = article.querySelector("button");
      if (borrarButton) {
        borrarButton.addEventListener("click", async (evento) => {
          const confirmacionBorrado = confirm(
            "¿seguro que quieres borrar el anuncio?"
          );
          if (confirmacionBorrado) {
            console.log("borrar el anuncio", confirmacionBorrado);
            await DataService.borrarAnuncio(anuncio);
            article.remove();
            await this.anuncioDetalle();
          }
        });
      }
      //logicas de hacer click en el anuncio
      article.addEventListener("click", (evento) => {
        console.log("click en el anuncio", anuncio.id);

        window.location.href = `details.html?id=${anuncio.id}`;
      });

      this.elemento.appendChild(article);
    }
  }

  async cargarAnuncios() {
    this.PubSub.publish(this.eventos.START_LOADING, {});
    // this.cargando.mostarLoader()
    try {
      const anuncios = await DataService.obtenerAnuncios();
      this.pintarAnuncios(anuncios);
    } catch (error) {
      console.error(error);
      this.PubSub.publish(this.eventos.ERROR, error);
    } finally {
      //  this.cargando.ocultarLoader()
      this.PubSub.publish(this.eventos.FINISH_LOADING, {});
    }
  }
}
