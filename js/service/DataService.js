const url =
  "https://gist.githubusercontent.com/Jatriana/915538990ce0448e1b44a25d0b43ceb2/raw/0b17ed63638cf90dbd4ebe0be073b90372de7654/anuncios.json";

export default {
  getAnuncios: async () => {
    const respuesta = await fetch(url);
    if (respuesta.ok) {
      const datos = respuesta.json();
      return datos;
    } else {
      throw new Error(`HTML Error : ${respuesta.status}`);
    }
  },
};
