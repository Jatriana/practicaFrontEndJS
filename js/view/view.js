

export const vistaAnuncio = (anuncio) =>{

  let deleteButtonHTML = '';
  if (anuncio.puedeSerBorrado) {
    deleteButtonHTML = '<button class="button is-danger">Borrar</button>';
  }

  let imgHTML= '';
  if(anuncio.foto){
    imgHTML=`<div class="card-image">
    <figure class="image is-4by3">
      <img
        src="${anuncio.foto}"
        alt="Placeholder image"
      />
    </figure>
  </div>`
  }
    return `<div class="card">
    ${imgHTML}
    <div class="card-content">
      <div class="media">
        
        <div class="media-content">
          <p class="nombre">${anuncio.nombre}</p>
          <p class="precio">${anuncio.precio}$</p>
          <p class="operacion">${anuncio.operacion}</p>
        </div>
      </div>

      <div class="content">
         ${anuncio.descripcion}
         <a>${anuncio.autor}</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br />
        <time datetime="${anuncio.date}">${anuncio.date}</time>
        <br>
        ${deleteButtonHTML}
      </div>
    </div>
  </div>`

}

export const vistaError = (errorMensaje) =>{


  return `<article class="message is-danger">
  <div class="message-header">
    <p>Error</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    ${errorMensaje}
  </div>
</article>`

}