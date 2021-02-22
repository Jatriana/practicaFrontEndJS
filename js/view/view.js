

export const vistaAnuncio = (anuncio) =>{
    return `<div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
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
        <time datetime=${anuncio.date}</time>
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