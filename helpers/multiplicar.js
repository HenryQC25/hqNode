/**
 * este archivo tiene la logica que funcione el app4,js
 */

const fs = require('fs')

/**
 * se utiliza el modulo.exports para dar permiso a este
 *  archivo de exportar crearArchivo hasta el final de este archivo
 *
 * 
 * Funcion que tiene por objeto crear la tabla de la base sugerida y 
 * por default imprimirá y generará la tabla del cinco, si no se ingresan los parametros base
 */

const crearArchivo=(base = 5)=>{
    console.clear();
console.log('---------------------');
console.log(`  Tabla del`,base);
console.log('---------------------');



let salida = ''

for(let i=1; i<=10; i++){
    salida += `${base} x ${i} = ${base * i} \n`
}

console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`,salida);

console.log(`tabla-${base}.txt creado`);
}

//module.exports es exclusivo en node  no funciona de la del cliente sea este el navegador
//en el navegador se utiliza export

module.exports = {
    crearArchivo
}


 