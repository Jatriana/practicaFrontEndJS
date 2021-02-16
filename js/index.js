
import PostsListController from './controllers/Postslistcontroller.js';
import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';

window.addEventListener("DOMContentLoaded", async (evento) => {
  
    const cargando = document.querySelector('.lds-ring');
    const loaderController = new LoaderController(cargando);
    

  
    const elemento = document.querySelector('.posts-list');
    const  controller = new PostsListController(elemento);
    controller.cargarAnuncios();

    
  
  
   const errorElemento = document.querySelector('.global-errors');
   const errorController = new ErrorController(errorElemento);
   
});
