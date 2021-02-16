import  BaseController from './BaseController.js';


export default class LoaderController  extends BaseController {


    mostrarLoader (){
        this.elemento.classList.remove('hidden');

    };
    ocultarLoader(){
        this.elemento.classList.add('hidden');
    };
};