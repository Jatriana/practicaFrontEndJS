//const url1 =
  //"https://gist.githubusercontent.com/Jatriana/915538990ce0448e1b44a25d0b43ceb2/raw/0b17ed63638cf90dbd4ebe0be073b90372de7654/anuncios.json";
const BASE_URL='http://127.0.0.1:8000';
const TOKEN_KEY = 'token';



export default {
  obtenerAnuncios: async function() {

    const usuarioActual = await this.identificarUsuario();
    const url = `${BASE_URL}/api/anuncios?_expand=user&_sort=id&_order=desc`;
    const respuesta = await fetch(url);
    if (respuesta.ok) {
      const datos = await respuesta.json();
      return datos.map(anuncio =>{
        return{
            nombre: anuncio.nombre.replace(/(<([^>]+)>)/gi, ""),
            operacion: anuncio.operacion.replace(/(<([^>]+)>)/gi, ""),
            precio : anuncio.precio,
            descripcion: anuncio.descripcion.replace(/(<([^>]+)>)/gi, ""),
            foto: anuncio.foto || null,
            date: anuncio.createdAt || anuncio.updatedAt,
            autor: anuncio.user.username,
            puedeSerBorrado: usuarioActual ? usuarioActual.userId ==anuncio.userId: false
        }
      })
    } else {
      throw new Error(`HTML Error : ${respuesta.status}`);
    }
  },


  post: async function(url, postData, json=true) {
    const config = {
        method: 'POST',
        headers: {},
        body: null
    };
    if (json) {
        config.headers['Content-Type'] = 'application/json';
        config.body = JSON.stringify(postData);  // convierte el objeto de usuarios en un JSON
    } else {
        config.body = postData;
    }
    const token = await this.obtenerToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
    const response = await fetch(url, config);
    const data = await response.json();
    if(response.ok){
      return data;
    }else{
      throw new Error(data.message || JSON.stringify(data))
    }

  },

  registroUsuario: async function(user) {
      const url = `${BASE_URL}/auth/register`;
      return await this.post(url, user);
  },

  login: async function(user) {
      const url = `${BASE_URL}/auth/login`;
      return await this.post(url, user);
  },

  guardarToken: async function(token){
    localStorage.setItem(TOKEN_KEY, token);

  },

  obtenerToken: async function (){
    return localStorage.getItem(TOKEN_KEY);
  },

  usuarioConAcceso: async function(){
    const token = await this.obtenerToken();
    return token !== null;

  },

  guardarAnuncio: async function(anuncio){
    const url = `${BASE_URL}/api/anuncios`
    if (anuncio.foto) {
      const imageURL = await this.subirImagen(anuncio.foto);
      anuncio.foto = imageURL;
  }
    return await this.post(url, anuncio);

  },

  subirImagen : async function(image) {
    const form = new FormData();
    form.append('file', image);
    const url = `${BASE_URL}/upload`;
    const response = await this.post(url, form, false);
    console.log('subirImagen', response);
    return response.path || null;
  },

  identificarUsuario: async function() {
    try {
        const token = await this.obtenerToken();
        const tokenParts = token.split('.');
        if (tokenParts.length !== 3) {
            return null;
        }
        const payload = tokenParts[1]; // cogemos el payload, codificado en base64
        const jsonStr = atob(payload); // descodificamos el base64
        const { userId, username } = JSON.parse(jsonStr); // parseamos el JSON del token descodificado
        return { userId, username };
    } catch (error) {
        return null;
    }
  }

};

