import BaseController from './BaseController.js';
import DataService from '../service/DataService.js';

export default class NewAnuncioFormController extends BaseController{

    constructor (elemento){

        super(elemento);
        this.chequearUsuarioConAcceso();
        this.añadirManejadorEventos();
        this.focusImput();
    }

   async chequearUsuarioConAcceso(){
        const usuarioAcceso = await DataService.usuarioConAcceso();
        if(!usuarioAcceso){
            window.location.href='/login.html?next=/newAnuncio.html';
        }else{
            this.publish(this.eventos.FINISH_LOADING);
        }
    }

    focusImput(){

        const input = this.elemento.querySelector('input');
        input.focus();
    }

    añadirManejadorEventos(){
        this.elemento.querySelectorAll("input").forEach((input) => {
            const button = this.elemento.querySelector("button");
            input.addEventListener("keyup", (event) => {
              // si el input es OK lo marco en verde, si no, en rojo
              if (input.validity.valid) {
                input.classList.add("is-success");
                input.classList.remove("is-danger");
              } else {
                input.classList.remove("is-success");
                input.classList.add("is-danger");
              }
      
              // valido si todo el formulario es OK para habilitar o deshabilitar el botón
              if (this.elemento.checkValidity()) {
                button.removeAttribute("disabled");
                // button.setAttribute('disabled', false); // esto también valdría
              } else {
                button.setAttribute("disabled", true);
              }
            });
          });
          const textarea = this.elemento.querySelector('textarea');
            textarea.addEventListener('keyup', () => {
            const button = this.elemento.querySelector('button');

            if(textarea.validity.valid){
                textarea.classList.add("is-success");
                textarea.classList.remove("is-danger");
              } else {
                textarea.classList.remove("is-success");
                textarea.classList.add("is-danger");
              };
            
            if (this.elemento.checkValidity()) {
                button.removeAttribute('disabled');
            } else {
                button.setAttribute('disabled', true);
            }
        });


        this.elemento.addEventListener('submit', async evento => {
            evento.preventDefault();  // cancelamos el envío del formulario (comportamiento por defecto)
            
            const anuncio = {
                nombre:this.elemento.elements.nombre.value,
                precio: this.elemento.elements.precio.value,
                operacion: this.elemento.elements.operacion.value,
                descripcion : this.elemento.elements.descripcion.value,
                foto: null
            }
            if (this.elemento.elements.file.files.length > 0) {
                anuncio.foto = this.elemento.elements.file.files[0];
            }
            this.publish(this.eventos.START_LOADING);
            try {
                await DataService.guardarAnuncio(anuncio);
                 window.location.href = '/?mensaje=anuncioOK'
            } catch (error) {
                this.publish(this.eventos.ERROR, error)
            } finally {
                this.publish(this.eventos.FINISH_LOADING)
            }
        });
    }
}