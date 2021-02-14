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

   
});
