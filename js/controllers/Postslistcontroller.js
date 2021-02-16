import BaseController from "./BaseController.js";
import DataService from '../service/DataService.js';
import {vistaAnuncio} from '../view/view.js';
import pubSub from '../service/Pubsub.js';




export default class PostsListController extends BaseController {


    pintarAnuncios(anuncios){

                
            for (const anuncio of anuncios) {
              const article = document.createElement('article');
                     
              article.innerHTML = vistaAnuncio(anuncio);
              this.elemento.appendChild(article);
            }
          

    }


    async cargarAnuncios(){
      var $this = this
        //pubSub.publish('startLoading', {});
        // this.cargando.mostarLoader()
        try {
            const anuncios = await DataService.obtenerAnuncios()
            this.pintarAnuncios(anuncios)
          } catch (error) {
              console(error);
          }finally{
          //  this.cargando.ocultarLoader()
            //pubSub.publish('finishLoading', {});
          }
    };
};