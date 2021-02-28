Nodepop Frontend
Información de contacto Alunmo:
Jaime  Triana 
Zubov2000

Práctica del módulo (Front end con JS)  desarrolloda para crear anuncios el frontend.

Página de listado de anuncios:

● En la página principal encontraremos un listado de anuncios. Cada anuncio presentará una
foto (si tiene), nombre, precio y si es compra o venta.
○ Los anuncios se cargan desde el backend.
○ En lo listado de anuncios se gestiona todos los estados de interfaz: 

 vacío (no hay anuncios), error (cuando se produce un error al cargar
los anuncios), carga (mientras se cargan los anuncios desde el backend) y éxito
(cuando se han recuperado los anuncios y están listos para ser mostrados).

● Al pulsar sobre un anuncio, se envia al usuario a la página de detalle de un
anuncio.
● Usuario con autenticacion,  permite al usuario crear un anuncio que al
pulsarlo, lo lleva a la página para crear un anuncio.
● Usario con autenticacion, permite borrar los anuncio que sean suyos.

Página de detalle de un anuncio:

● El detalle de un anuncio muestra foto (si tiene), nombre, precio , compra o
venta y Descripcion.

● En detalles de anuncio se  gestiona todos los estados de interfaz anteriores
● Usuario con autenticacion  le pertenece eliminar el anuncio y cear anuncio.

Página para crear un anuncio:

● crear un anuncio  mostrando un formulario con los
siguientes campos:
○ Foto (opcional): permitirá subir una foto del anuncio
○ Nombre (obligatorio): nombre del anuncio
○ Precio (obligatorio): precio del anuncio
○ Compra/venta :(obligatorio)

● Cuando el usuario envía el formulario, envia al backend una petición para guardar
el anuncio.
● gestionar todos los estados de interfaz:carga, error y éxito.

Página de login:

● La página de login muestra un formulario solicitando el nombre de usuario y
contraseña.
● Cuando el usuario envíe el formulario, se autentica el usuario contra el backend para
obtener un token JWT que será utiliza en las siguientes comunicaciones con el backend
para autenticar al usuario.
● Se gestionan todos los estados de interfaz: carga, error y éxito.

Página de registro:
● la pagina de login muestra un formulario solicitando el nombre de usuario
y contraseña.
● El usuario envía el formulario, registra al usuario en el backend.
● Se gestiona todos los estados de interfaz: carga, error y éxito.



El backend
El backend a utilizar será sparrest.js , basado en json-server , el cual nos ofrece un completo API
REST para simular un backend real

Para hacerlo funcionar, únicamente hay que descargarse el código desde
https://github.com/kasappeal/sparrest.js y, dentro de la carpeta donde se aloja el código, instalar
las dependencias ejecutando:
npm i
Y para arrancar el servidor ejecutar:
npm start
Por defecto, arrancará el servidor en el puerto 8000, por lo que se podrá acceder a él a través de
http://127.0.0.1:8000/
Este backend expone los siguientes endpoints:
● POST /auth/register : permite registrar un usuario. Recibe como parámetros username y
password y devuelve si se ha podido o no registrar al usuario (no permite usuarios con el
mismo username en el sistema).
● POST /auth/login : endpoint de autenticación. Recibe como parámetros username y
password y devuelve un token JWT de autenticación.
● POST /upload : que permite la subida de archivos a través de un atributo file. Sólo se
pueden subir archivos usando el formato multipart/form-data.
● En / api/ :
○ Se encuentran los endpoints ofrecidos por json-server , por lo que se aconseja la
lectura de su documentación.
○ Para usar los métodos POST, PUT o DELETE en cualquier subruta de / api/ , será
necesaria la autenticación usando token JWT.

○ Esta autenticación se realiza añadiendo a las peticiones HTTP una cabecera
Authorization: Bearer <token> , donde <token> es el valor del token obtenido
en el endpoint de login.

Carpera LIB 

JSON de la practica

Proximas implementaciones para la siguiente version.... en un futuro no muy lejano

● Gestionar la paginación de anuncios en el listado, ya que por defecto json-server sólo
devuelve 10 elementos.
● Implementar un buscador de anuncios en el listado.
● Permitir editar un anuncio, sólo si el usuario autenticado es el propietario del anuncio.
● Permitir el filtrado de anuncios usando tags. Por lo que en el formulario de anuncio
deberán poder incluirse tags de los mismos. Estos tags inicialmente pueden ser estáticos
(siempre los mismos).
● Unido al anterior, hacer que los tags sean dinámicos.