/***
 * Ejercicio inicio de nuestro proyecto, crear una app que imprima en consola la tabla
 * del cinco, trate de realzar por sus medios y compare el resultado de su logica contra lo que resulta aca.
 * 
 * 
 * 
 * hacer un programa en consola que imprima la tabla del cinco de forma automatica 
 * 5x1 = 5
 * 5x2 = 10
 * 5x3 = 15
 * 
 * 
 * 5x10 = 50
 * 
 * 
 * Para ejecutar la aplicacion es necesario llvar la consola a la carpeta donde se encuentra este proyecto 04-fundamentos y ejecutar el siguiente comando
 * 
 * node app
 * 
 * 
 * La variable base sirve para indicar sobre que base vamos a realizar la tabla
 * de multiplicar
 * 
 */

let base = 5

console.clear(); // limpia pantalla

const tabla = (base)=>{
    let resultado = ''
    console.log(`----Tabla del ${base}------------- `);

    for (let i=1; i<=10; i++){
        resultado = resultado + `${base} x ${i} = ${base * i } \n`
    }

    return resultado
}


console.log(tabla(base));

/////////////////////////////
//------------------------
//version propuesta propia
/*let base1 = 5

console.clear(); // limpia pantalla

const tabla1 = (base)=>{
    
    console.log(`----Tabla del ${base}------------- `);

    for (let i=1; i<=10; i++){
       let valor = base * i;
       console.log(`${base} x ${i} = ${valor} \n`);
    }

  
}


tabla1(base1)

*/