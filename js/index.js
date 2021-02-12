
const loader = document.querySelector('.lds-ring');
loader.classList.add('hidden')

for(let i = 0 ; i < 8 ; i++){

    const anuncio = document.createElement('article');
    const anuncioHTML = `<div class="card">
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
          <p class="nombre">Bicicleta</p>
          <p class="precio">90 $</p>
        </div>
      </div>

      <div class="content">
          Vendo bicicleta nueva, Cruise City stile. Comprada en octubre y solo se le ha dado un uso.
           La vendo por no usarla. La entrego tal cual se ve en las fotos. Es de 28'. City &amp; trekking.
         <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>`;

    anuncio.innerHTML= anuncioHTML;
    const lista = document.querySelector('.posts-list');
    lista.appendChild(anuncio);

    
    
}