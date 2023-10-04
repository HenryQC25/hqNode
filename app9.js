/**
 * ejercicio package.json - init - install - unistall
 * dando inicio al uso de paquete yargs
 * 
 * 
 * utilizando NPM para hacer el siguiente ejercicio
 * 
 * 
 * 
 * 
 * 
 * instalar 
 * 1- npm init 
 * para inciar los paquetes por defecto 
 * si se quiere contestar a todo si se pued utilizar una bandera
 * 
 * package name: dejar nombre
 * version: 0.0.1
 * descripcion: en una tabla de multiplicar con archivo de texto
 * Entry point: app9.js
 * test commando: deja vacio, pero sirve para hacer pruebas unitarias  y de integracion
 * git repository dejar vacio
 * keywords: vacio, per sirve para buscar por palabras la app
 * author: henry quenun
 * license: MIT
 * is this ok? presiona enter
 * 
 * se genero dentro del proyecto el archivo package.json
 * 
 * 
 * 
 * 
 * archivo package.json 
 * examinar este archivo en su carpeta 
 * version: no se puede regresar a versiones anteriores
 * 
 * este archivo es punto inicial de cualquier node 
 * y dice que comandos podemos usar para operar la app por ejemplo 
 * test
 * se agrega en scrypt base3 = node app9.js --base=3
 * 
 * luego guardar y correr npm run base3
 * verificar que main: app9,js
 * npm run base 3
 * 
 * 
 * 
 * Instalacion de paquete de colores 
 * 
 * npm i colors
 * en la dependencia del package.json se puede verificar la instalacion de la 
 * dependencia de colors en mi caso la vesrsion 1.4.0
 * tambien ahora existe el archivo package-log.json aqui dice como se contruyeron las dependencias
 * tambien se creo la carpeta node_modules se tiene las dependencias en si
 * podria instalar dependencias que solo me sirven para desarrollo y no para produccion como nodemon
 * npm nodemon  install --sev-dev
 * si quiere desinstalar usa
 * npm uninstall nodemon
 *  
 */

/**
 * 
 * instalacion del paquete Yargs
 * npm i yargs
 */


const {crearArchivo} = require('./helpers/multiplicar3')
const argv = require('yargs').argv; //requerimos yargs

console.clear();

console.log(process.argv);
console.log(argv);
console.log('base: yargs ',argv.base);

/**
 * utilizar 
 * 1-    node app9 
 * 2-    node app9 --base3
 * 
 * yargs ve los tipos de datos
 * 
 * 
 * usar tambien node app9 
 * 
 */