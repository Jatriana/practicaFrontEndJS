
import {anuncioView} from './view/view.js';
import dataService from './service/DataService.js';


window.addEventListener('DOMContentLoaded', (evento) => {

const loader = document.querySelector('.lds-ring');
loader.classList.add('hidden')

  // function cargarAnuncios(){
  //     fetch('../lib/db.json')
  //     .then(respuetas =>respuetas.json())
  //     .then(respuesta => console.log(respuesta));
  // }

  const anuncios = dataService.getAnuncios();

  const lista = document.querySelector('.posts-list');

  for (const anuncio of anuncios) {
    const anuncioElemento = document.createElement('article');
    const anuncioHTML = anuncioView(anuncio)
    anuncioElemento.innerHTML = anuncioHTML;
    lista.appendChild(anuncioElemento);
  };


});
