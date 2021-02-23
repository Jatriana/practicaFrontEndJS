import BaseController from './BaseController.js';
import DataService from '../service/DataService.js';

export default class NewAnuncioFormController extends BaseController{

    constructor (elemento){

        super(elemento);
        this.chequearUsuarioConAcceso();
        this.añadirManejadorEventos();
    }

   async chequearUsuarioConAcceso(){
        const usuarioAcceso = await DataService.usuarioConAcceso();
        if(!usuarioAcceso){
            window.location.href='/login.html';
        }else{
            this.publish(this.eventos.FINISH_LOADING);
        }
    }

    añadirManejadorEventos(){

    }
}