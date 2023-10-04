/**
 * ejercicio - configuracion de yargs independiente 
 * utilizará el multiplicar4.js que tendra la opcion 
 * para aceptar de parametro la bandera -l  --listar
 * 
 * 
 * se corto la logica de yargs y se paso a un archivo yargs.js
 * 
 */


const {crearArchivo} = require('./helpers/multiplicar4')
const argv = require('./config/yargs') 
//se requiere el archivo yargs.js que esta en config pero se iguala un objeto a un llamado argv
//para que no cambie nninguna logica

console.clear();
console.log(argv);


crearArchivo(argv.b,argv.l)
.then(nombreArchivo =>console.log(nombreArchivo, 'creado'))
.catch(err=>console.log(err))
