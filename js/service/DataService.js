//const url1 =
  //"https://gist.githubusercontent.com/Jatriana/915538990ce0448e1b44a25d0b43ceb2/raw/0b17ed63638cf90dbd4ebe0be073b90372de7654/anuncios.json";
const BASE_URL='http://127.0.0.1:8000';
const TOKEN_KEY = 'token';



export default {
  obtenerAnuncios: async () => {
    const url = `${BASE_URL}/api/anuncios?_expand=user&_sort=id&_order=desc`;
    const respuesta = await fetch(url);
    if (respuesta.ok) {
      const datos = await respuesta.json();
      return datos.map(anuncio =>{
        return{
            nombre: anuncio.nombre,
            operacion: anuncio.operacion,
            precio :anuncio.precio,
            descripcion: anuncio.descripcion,
            date: anuncio.createdAt,
            autor: anuncio.user.username
        }
      })
    } else {
      throw new Error(`HTML Error : ${respuesta.status}`);
    }
  },


  post: async function (url, postData){
    const config ={
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData)
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
    return await this.post(url, anuncio);


  }

};

