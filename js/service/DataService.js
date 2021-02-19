//const url1 =
  //"https://gist.githubusercontent.com/Jatriana/915538990ce0448e1b44a25d0b43ceb2/raw/0b17ed63638cf90dbd4ebe0be073b90372de7654/anuncios.json";
const BASE_URL='http://127.0.0.1:8000';
const TOKEN_KEY = 'token';



export default {
  obtenerAnuncios: async () => {
    const url = `${BASE_URL}/api/posts`;
    const respuesta = await fetch(url);
    if (respuesta.ok) {
      const datos = respuesta.json();
      return datos;
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

  }

  obtenerToken: async function (token){
    return localStorage.setItem(TOKEN_KEY, token);
  }

};

