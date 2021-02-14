
function getFockinAnuncios(){

    return  [
        {
          nombre: "bicicleta",
          operacion: "venta",
          precio: 230.15,
          descripcion:
            "Vendo bicicleta nueva, solo se le ha dado un uso. La vendo por no usarla ",
          foto: "bici.jpg",
          tags: ["lifestyle", "movilidad", "articulos"],
        },
        {
          nombre: "moto",
          operacion: "compra",
          precio: 1650.0,
          descripcion: " Compro motro Marca Rata, usada de no me importa el estado",
          foto: "moto.jpg",
          tags: ["lifestyle", "movilidad", "articulos"],
        },
        {
          nombre: "coche",
          operacion: "venta",
          precio: 11650.0,
          descripcion: "Peugeot 406 Sedan en Toledo",
          foto: "cpche.jpg",
          tags: ["lifestyle", "movilidad", "articulos"],
        },
        {
          nombre: "cama",
          operacion: "compra",
          precio: 650.0,
          descripcion:
            "able abatible. Gran capacidad. Colchón Flex. Medidas 150x190",
          foto: "cama.jpg",
          tags: ["lifestyle", "house", "articulos"],
        },
        {
          nombre: "Iphone 6S",
          operacion: "venta",
          precio: 500,
          descripcion: "Iphone 6s de 32gb Prácticamente sin uso.",
          foto: "iphone6s.jpg",
          tags: ["lifestyle", "mobile", "articulos"],
        }
      ];
}





export default {
  getAnuncios: () => {
    //   fetch('../lib/db.json')
    //   .then(respuetas =>respuetas.json())
    //   .then(respuesta => console.log(respuesta));
    // const response = await fetch('../lib/db.json');
    //         const data = response.json();
    //         console.log(data)
    //         return data;
    //     }
   
    const promise = new Promise((resolve, reject) => {
        // resolve -> callback cuando todo va bien
        // reject -> callback cuando algo va mal
        setTimeout(() => {
            const anuncios = getFockinAnuncios();
            if (anuncios.length === 0) {
                reject(anuncios);
            } else {
                resolve(anuncios);
            }
        }, Math.random() * 5000)
    });
    return promise





    }
}