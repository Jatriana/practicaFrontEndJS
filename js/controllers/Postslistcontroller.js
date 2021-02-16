import BaseController from "./BaseController.js";
import DataService from '../service/DataService.js';
import {vistaAnuncio} from '../view/view.js';





export default class PostsListController extends BaseController {


    pintarAnuncios(anuncios){

                
            for (const anuncio of anuncios) {
              const article = document.createElement('article');
                     
              article.innerHTML = vistaAnuncio(anuncio);
              this.elemento.appendChild(article);
            }
          

    }


    async cargarAnuncios(){
      
        this.PubSub.publish(this.eventos.START_LOADING, {});
        // this.cargando.mostarLoader()
        try {
            const anuncios = await DataService.obtenerAnuncios()
            this.pintarAnuncios(anuncios)
          } catch (error) {
              console.error(error);
              this.PubSub.publish(this.eventos.ERROR, error);
          }finally{
          //  this.cargando.ocultarLoader()
           this.PubSub.publish(this.eventos.FINISH_LOADING, {});
          }
    };
};