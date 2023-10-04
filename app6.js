/**
 * conversion funcion a promesa
 * 
 *mejorando multiplicar3
 se destructura crar archivo
 se ejecuta en async asincorna para optimizar el tiempo de ejecucion
 se usa try catch para manejar su proceso
 */

 const{crearArchivo}= require('./helpers/multiplicar3')


 //carpeta helpers para toda la logica


 console.clear();

 const base = 2;

 
crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo, 'creando'))
.catch(err=> console.log(err))