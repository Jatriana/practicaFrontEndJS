import { anuncioView } from "./view/view.js";
import dataService from "./service/DataService.js";

window.addEventListener("DOMContentLoaded", async (evento) => {
  const loader = document.querySelector(".lds-ring");
  loader.classList.add("hidden");

  const cargarAnuncios = (anuncios) => {
    const lista = document.querySelector(".posts-list");

    for (const anuncio of anuncios) {
      const anuncioElemento = document.createElement("article");
      const anuncioHTML = anuncioView(anuncio);
      anuncioElemento.innerHTML = anuncioHTML;
      lista.appendChild(anuncioElemento);
    }
  };
  const avisarDelError = (error) => {
    console.error("no se cargan los anuncios");
  };
  dataService.getAnuncios().then(cargarAnuncios).catch(avisarDelError);


    const url =  'https://gist.githubusercontent.com/Jatriana/915538990ce0448e1b44a25d0b43ceb2/raw/0b17ed63638cf90dbd4ebe0be073b90372de7654/anuncios.json';
    const response =  await fetch(url);
    const data  = await response.json();
    console.log('esto son los datos', data);

    // fetch(url).then(respuesta =>{
    //     console.log('respuesta recibida', respuesta);
    //     respuesta.json().then((data) =>{
    //         console.log('estos son los datos,', data)
    //     }).catch((error)=>{

    //     })
    // }).catch(error => {
    //     console.error('la peticion ha fallado', error);
    // })

});
