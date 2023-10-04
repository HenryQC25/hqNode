/**
 * Ejercicio - para separar la logica de la app con el 
 * archivo principal del mismo
 * 
 * 
 * 
 * aca manda a llamar la destructuracion de multiplicar.js
 * que ahora ya tiene permisos para improtar crearArchivo
 */

const {crearArchivo}=require('./helpers/multiplicar')

/**
 * se creo la carpeta helpers para crear toda la logica de la app 
 * dentro de el archivo multiplicar.js
 */

console.clear();
const base=1
crearArchivo(base)