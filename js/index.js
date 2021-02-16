
import PostsListController from './controllers/Postslistcontroller.js';
import LoaderController from './controllers/LoaderController.js'

window.addEventListener("DOMContentLoaded", async (evento) => {
  
    const cargando = document.querySelector('.lds-ring');
    const loaderController = new LoaderController(cargando);
    

  
    const elemento = document.querySelector('.posts-list');
    const  controller = new PostsListController(elemento);
    controller.cargando = loaderController.ocultarLoader()
    controller.cargarAnuncios();

    
  
  
   
});
