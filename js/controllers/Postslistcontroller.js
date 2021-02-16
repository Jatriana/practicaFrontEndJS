import BaseController from "./BaseController.js";
import DataService from '../service/DataService.js';
import {vistaAnuncio} from '../view/view.js';
import PubSub from '../service/Pubsub.js';




export default class PostsListController extends BaseController {


    pintarAnuncios(anuncios){

                
            for (const anuncio of anuncios) {
              const article = document.createElement('article');
                     
              article.innerHTML = vistaAnuncio(anuncio);
              this.elemento.appendChild(article);
            }
          

    }


    async cargarAnuncios(){
      
        PubSub.publish('startLoading', {});
        // this.cargando.mostarLoader()
        try {
            const anuncios = await DataService.obtenerAnuncios()
            this.pintarAnuncios(anuncios)
          } catch (error) {
              console.error(error);
              PubSub.publish('error', error);
          }finally{
          //  this.cargando.ocultarLoader()
           PubSub.publish('finishLoading', {});
          }
    };
};