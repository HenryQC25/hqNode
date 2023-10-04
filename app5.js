/**
 * ejercicio de conversion de funcion a promesa de multiplicar2
 * mejorando el codigo
 * aca se manda a lllamar la desutructuracion de multiplicar2
 * que ahora ya tiene permisos apra importar la fucnion crear Archivo
 * aca se transforma en promesa las funciones flecha
 */

const {crearArchivo}=require('./helpers/multiplicar2')

/**
 * se creo la carpeta helpers para crear la logica de la app
 * en un archivo dentro de esta carpeta llamado multiplicar2
 */

console.clear();

const base=31

/**
 * cuando se utiliza el then ejecuta el resolve en señal de exito
 * cuando ejecuta catch ejecuta reject porque fuen un fracaso 
 */

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creando'))
    .catch(err=> console.log(err))