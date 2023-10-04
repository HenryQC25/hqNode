/**
 * Ejercicio - requerir poaquetes internos
 * importar archivos a nuestro proyecto utilizando writefile
 */

const fs = require('fs'); // requiere para poder operar archivos

/**
 * En este ejercicio se desea  evolucionar la app para que se pueda
 * imprimir cualquier base para la tabla de multiplicar 
 * y luego de imprimir en consola se genere un archivo .txt con
 * el nombre de la tabla y sus datos.
 * Para poder crear y guardar datos en un archivo es necesario utilizar
 * el paquete interno File Sistem (fs) y el nombre writefile
 * 
 * Algo interesante de NODE es que podemos operar archivos es decir podemos 
 * crear, modificar, eliminar archivos por medio de NODE
 * 
 * 
 * En este caso se pretende imprimir la tabla de multiplicar en un archivo
 * Visitar la pagina oficial de Node js
 * ver documentacion actual
 * 
 * 
 */


const base = 14 
let salida = ''

console.clear();
console.log('---------------------');
console.log(`  Tabla del ${base}`);
console.log('---------------------');

for(let i=1; i<=10; i++){
    salida += `${base} x ${i} = ${base * i} \n`
}

console.log(salida);

fs.writeFile(`tabla-${base}.txt `, salida , (err)=>{
    if(err) throw err;
    console.log(`tabla-${base}.txt creado con writeFile`)

})

   
