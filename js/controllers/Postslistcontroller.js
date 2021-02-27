import BaseController from "./BaseController.js";
import DataService from '../service/DataService.js';
import {vistaAnuncio} from '../view/view.js';
import PostsDetailsController from './PostDetailsController.js';





export default class PostsListController extends BaseController {


    pintarAnuncios(anuncios){

        console.log('como vienen los datos ',anuncios)
            for (const anuncio of anuncios) {
              const article = document.createElement('article');
                     
              article.innerHTML = vistaAnuncio(anuncio);
              //logicas de hacer click en el anuncio
              article.addEventListener('click', evento =>{
                console.log('click en el anuncio', anuncio.id);
                     DataService["idAnuncio"] =anuncio
                   console.log('obtendo del servidor el anuncio clickado',DataService.idAnuncio)
                //  window.location.href = `details.html?id=${anuncio.id}`;
              
                                
              })

              //logigas de borrar el anuncio
              // const borrarButton = article.querySelector('button');
              // if(borrarButton){
              //   borrarButton.addEventListener('click', async evento =>{
                  
              //     const confirmacionBorrado = confirm('¿seguro que quieres borrar el anuncio?');
              //     if(confirmacionBorrado){
              //       console.log('borrar el anuncio', confirmacionBorrado);
              //       await DataService.borrarAnuncio(anuncio);
              //     }
              //   })
              // }

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


