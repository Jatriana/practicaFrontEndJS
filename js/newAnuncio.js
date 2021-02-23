import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import NewAnuncioFormController from './controllers/newAnuncioFormController.js';


window.addEventListener('DOMContentLoaded', () => {
    const cargando = document.querySelector('.lds-ring');
    const loaderController = new LoaderController(cargando);

    const errorsElemento = document.querySelector('.global-errors');
    const errorController = new ErrorController(errorsElemento);

    const formularioElemento = document.querySelector('form');
    const newAnuncio = new NewAnuncioFormController(formularioElemento);
});
