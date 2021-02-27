import BaseController from "./BaseController.js";
import DataService from '../service/DataService.js';
import {vistaAnuncio} from '../view/view.js';






export default class PostsDetailsController extends BaseController {

  
    anuncioDetallado(anuncios){
       const detalleAnuncio = DataService.idAnuncio;
       console.log('valor de idAnuncio',detalleAnuncio)     
    

        

            const article = document.createElement('article');
            article.innerHTML = vistaAnuncio(anuncio.id);
            this.elemento.appendChild(article);
      
    
    }


    async cargarAnuncio(){
      
        this.PubSub.publish(this.eventos.START_LOADING, {});
        // this.cargando.mostarLoader()
        try {
          const anuncios = await DataService.obtenerAnuncios()
            this.anuncioDetallado(anuncios)
          } catch (error) {
              console.error(error);
              this.PubSub.publish(this.eventos.ERROR, error);
          }finally{
          //  this.cargando.ocultarLoader()
           this.PubSub.publish(this.eventos.FINISH_LOADING, {});
          }
    };
};