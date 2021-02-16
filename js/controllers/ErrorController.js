import BaseController from './BaseController.js';
import {vistaError} from '../view/view.js';
import PubSub from '../service/Pubsub.js';

export default class ErrorController extends BaseController{

    constructor(elemento) {
        super(elemento);
        PubSub.subscribe('error', (error) => {
            this.mostarError(error);
        });
    }

    mostarError(errorMensaje){
        this.elemento.innerHTML = vistaError(errorMensaje);
        this.elemento.classList.remove('hidden')
        this.elemento.addEventListener('click', (evento)=> {

            if (evento.taget == this.elemento || evento.target.classList.contains('delete')){
            this.elemento.classList.add('hidden');
            }
        })
    }
}