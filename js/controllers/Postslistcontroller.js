import BaseController from "./BaseController.js";
import DataService from '../service/DataService.js';
import {anuncioView} from '../view/view.js';



export default class PostsListController extends BaseController {


    pintarAnuncios(anuncios){

                
            for (const anuncio of anuncios) {
              const article = document.createElement('article');
                     
              article.innerHTML = anuncioView(anuncio);
              this.elemento.appendChild(article);
            }
          

    }


    async cargarAnuncios(){
        try {
            const anuncios = await DataService.obtenerAnuncios()
            this.pintarAnuncios(anuncios)
          } catch (error) {
              console(error);
          };
    };
};