
import PostsListController from './controllers/Postslistcontroller.js';


window.addEventListener("DOMContentLoaded", async (evento) => {
  
    const loader = document.querySelector('.lds-ring');
  loader.classList.add("hidden");

  
    const elemento = document.querySelector('.posts-list');
    const  controller = new PostsListController(elemento);
    controller.cargarAnuncios();

    
  
  
   
});
