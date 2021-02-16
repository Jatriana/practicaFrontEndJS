import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import RegisterFormController from './controllers/RegisterFormController.js';

window.addEventListener('DOMContentLoaded', () => {
    const cargando = document.querySelector('.lds-ring');
    const loaderController = new LoaderController(cargando);

    const errorsElemento = document.querySelector('.global-errors');
    const errorController = new ErrorController(errorsElemento);

    const formElemento = document.querySelector('form');
    const formController = new RegisterFormController(formElemento);
});
