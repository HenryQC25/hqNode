const fs = require('fs')
const colors = require('colors')//utiliza colores
const { Module } = require('module');




/*
const crearArchivo=async(base=5,listar=false)=>{
    try{
        let salida=''
        //genera la tabla de lo que se envíe en la base del 1 al 10
        for(let i=1; i<=10; i++){
            salida += `${base} x ${i} = ${base * i} \n`
        }

        if(listar){
            console.log('---------------------'.green);
            console.log(`  Tabla del `.green,colors.blue(base));
            console.log('---------------------'.green);
            console.log(salida);
           
        }
        fs.writeFileSync(`tabla-${base}.txt`,salida)
        return `tabla-${base}.txt`
    }catch (err){
        throw err
    }
}
*/


/**
 * la forma preferida de realizar operaciones de escritura de archivos en Node.js es utilizar la forma asíncrona con promesas, ya que permite que tu programa siga 
 * siendo reactivo y no bloquee el hilo de ejecución principal mientras se realizan tareas de E/S.
 * 
 * 
 * Función Síncrona:

Una función síncrona es aquella en la que las tareas se ejecutan en orden, una tras otra, de manera secuencial.
Cuando se llama a una función síncrona, el programa espera a que la función termine su ejecución antes de continuar con otras tareas.
Si una tarea dentro de una función síncrona se bloquea o demora, puede hacer que todo el programa se bloquee y no responda hasta que se complete esa tarea.
Las funciones síncronas son simples de entender porque el flujo de ejecución es lineal y predecible.
 * 
 * 
 * 
 * Función Asíncrona:

Una función asíncrona es aquella en la que las tareas pueden ejecutarse en paralelo o en un orden no predecible.
Cuando se llama a una función asíncrona, el programa no espera a que la función termine inmediatamente, en su lugar, 
continúa ejecutando otras tareas mientras la función asíncrona trabaja en segundo plano.
Las funciones asíncronas son útiles cuando se necesita realizar operaciones que pueden llevar tiempo, como leer 
un archivo, hacer una solicitud de red o esperar un temporizador, sin bloquear el programa principal.
Para manejar resultados de funciones asíncronas, a menudo se utilizan devoluciones de llamada 
(callbacks), promesas o, en versiones más recientes de JavaScript, async/await.
 */
const os = require('os');
const saltoDeLinea = os.EOL;

const limpiarColores = (texto) => {
    // Expresión regular para eliminar los códigos de colores ANSI
    const expresionRegular = /\x1b\[[0-9;]*m/g;
    return texto.replace(expresionRegular, '');
  };

 // utiliza una expresión regular para eliminar los códigos de colores ANSI de una cadena de texto. 



const crearArchivo=async(base=1,hasta=5,listar=false)=>{
    try{
        
       
  //no sirve para crear las tablas y llegar al limite propuesto 
   let salida =''                        //usando los parametros 1 de base y el otro del limite
                        
      
        for(let i=1; i<=hasta; i++){
            
          salida += '| '.green+`   ${colors.blue(base)} x ${colors.magenta(i)} = ${colors.white(base * i)}   `.blue.bgBlack+ `\n---------------------\n`.green
          
        }
       
        if(listar){ 
             //si listar es true despliega la lista del contenido en consola
            console.log('---------------------'.green.bgBlack);
            console.log(`|`.green.bgBlack+`    Tabla del ${base}     `.red.bgBlack);  //aplicamos propiedades de color
            console.log('---------------------'.green.bgBlack);
            
            console.log(`\n${salida}            `);
          
           
            
        }
 
        const ruta=`salida/tabla-${base}-hasta-${hasta}.txt`;

        fs.writeFileSync(ruta,limpiarColores(`     tabla del ${base}\n---------------------\n`+salida))  // se limpia ya que en el archivo 
        return `tabla-${base}-hasta-${hasta}.txt`                                   //que se genera no imprime por la 
    }catch (err){                                                                   //libreria colors esto fue extra xd
        throw err
    }
}

//ponemos la funcion en disposicion de otros modulos
module.exports = {
    crearArchivo
}











/**
 * const crearArchivo=async(base=1,base2=5,listar=false)=>{
    try{
        
        let salida1=''
for(let j = base; j <= base2; j++){   //no sirve para crear las tablas y llegar al limite propuesto 
   let salida =''                        //usando los parametros 1 de base y el otro del limite
                        
      
        for(let i=1; i<=10; i++){
            
          salida += `${j} x ${i} = ${j * i} \n`
        }
        salida+='\n'
    
        if(listar){     //si listar es true despliega la lista del contenido en consola
            console.log('---------------------'.green);
            console.log(`  Tabla del `.green,colors.blue(j));  //aplicamos propiedades de color
            console.log('---------------------'.green);
            console.log(colors.blue(salida));
         
        }
salida1+=salida  //se ira agregando al archivo txt

}
        fs.writeFileSync(`tabla-${base}-hasta-${base2}.txt`,limpiarColores(salida1))  // se limpia ya que en el archivo 
        return `tabla-${base}-hasta-${base2}.txt`                                   //que se genera no imprime por la 
    }catch (err){                                                                   //libreria colors esto fue extra xd
        throw err
    }
}
 */