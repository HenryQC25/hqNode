/**
 * Ejercicio - importar archivos a nuestro proyecto
 * utilizando el writeFileSync
 * 
 */

const fs = require('fs')

/**
 * En esete ejercicio se desea evolucionar la app para que 
 * pueda imprimir cualquier base para la tabla de multiplicar
 * y luego de imprimir en consola se genere un archivo txt con el nombre de la tabla y sus datos.
 * Para poder crear y guardar datos en un archivo es neceario utilizar 
 * el paquete interno  File Stream (fs) y el método writeFileSync que es mucho mas sencillo y óptimo que el writefile
 */

const base = 16
let salida = ''

console.clear();
console.clear();
console.log('---------------------');
console.log(`  Tabla del ${base}`);
console.log('---------------------');


for(let i=1; i<=10; i++){
    salida += `${base} x ${i} = ${base * i} \n`
}

console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`,salida)
console.log(`tabla-${base}.txt creado con writeFileSync`);