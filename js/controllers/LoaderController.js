import  BaseController from './BaseController.js';


export default class LoaderController  extends BaseController {

    constructor(elemento) {
        super(elemento);
        this.subscribe(this.eventos.START_LOADING, () => {
            this.mostrarLoader();
        });
        this.subscribe(this.eventos.FINISH_LOADING, () => {
            this.ocultarLoader();
        });
    }

    mostrarLoader (){
        this.elemento.classList.remove('hidden');

    };
    ocultarLoader(){
        this.elemento.classList.add('hidden');
    };
};