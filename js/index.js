
const loader = document.querySelector('.lds-ring');
loader.classList.add('hidden')

// function cargarAnuncios(){
//     fetch('../lib/db.json')
//     .then(respuetas =>respuetas.json())
//     .then(respuesta => console.log(respuesta));
// }

const anuncios = [
    {
      "nombre": "bicicleta",
      "operacion": "venta",
      "precio": 230.15,
      "descripcion": "Vendo bicicleta nueva, solo se le ha dado un uso. La vendo por no usarla ",
      "foto": "bici.jpg",
      "tags": ["lifestyle", "movilidad", "articulos"]
    },
    {
      "nombre": "moto",
      "operacion": "compra",
      "precio": 1650.0,
      "descripcion": " Compro motro Marca Rata, usada de no me importa el estado",
      "foto": "moto.jpg",
      "tags": ["lifestyle", "movilidad", "articulos"]
    },
    {
      "nombre": "coche",
      "operacion": "venta",
      "precio": 11650.0,
      "descripcion": "Peugeot 406 Sedan en Toledo",
      "foto": "cpche.jpg",
      "tags": ["lifestyle", "movilidad", "articulos"]
    },
    {
      "nombre": "cama",
      "operacion": "compra",
      "precio": 650.0,
      "descripcion": "able abatible. Gran capacidad. Colchón Flex. Medidas 150x190",
      "foto": "cama.jpg",
      "tags": ["lifestyle", "house", "articulos"]
    },
    {
      "nombre": "Iphone 6S",
      "operacion": "venta",
      "precio": 500,
      "descripcion": "Iphone 6s de 32gb Prácticamente sin uso.",
      "foto": "iphone6s.jpg",
      "tags": ["lifestyle", "mobile", "articulos"]
    }
    
];

const lista = document.querySelector('.posts-list');

for(const anuncio of anuncios){

    const anuncioElemento = document.createElement('article');
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
          <p class="nombre">${anuncio.nombre}</p>
          <p class="precio">${anuncio.precio}$</p>
          <p class="operacion">${anuncio.operacion}</p>
        </div>
      </div>

      <div class="content">
         ${anuncio.descripcion}
         <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>`;

    anuncioElemento.innerHTML= anuncioHTML;
    lista.appendChild(anuncioElemento);

    
    
}