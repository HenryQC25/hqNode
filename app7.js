/**
 * se utilizará multiplicar 3 de helpers sin modificar nada de ese archivo
 * 
 * ejercicio - recibir informacion desde la linea de comandos 
 * aca se manda a lllamar la destructuracion por ejemplo 
 * nodemon --version
 * 
 * 
 */


const {crearArchivo} = require('./helpers/multiplicar3')

/**
 * codigo comentado para hacer el ejercicio de el process.argv
 * que se quiere que trabajemps con la liena de comandos para operar la app
 * por ejemplo --base-3 --limite=10
 * que pasi si yo en estos comentarios escribo node app6 --base=9
 */

console.clear();

/**
 * const base=2
 * crearArchivo(base)
 *  .then(nombreArchivo=> console,log(nombreArchivo, 'creado'))
 *  .catch(err=>console.log(err))
 * 
 * 
 */

console.log(process.argv)//imprime los procesos que vienen de la consola

/**
 * codigo comentado apra hacer el ejercicio de el process.argv
 * probar agregando en consola node app7 --base=5
 * 
 */

//capturando el tercer argumento
//ingresa en consola node app7

const [, , arg3='base=5'] = process.argv
const [, base=5] = arg3.split('=')
console.log(base);
//se puede comproibar sin argumentos node app7