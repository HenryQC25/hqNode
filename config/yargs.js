/**
 * Parte logica de yargs, solo se corto y pego aca por el momento no tiene ningun 
 */
//opciones para capturar datos

const argv = require('yargs')
.option('b',{
    alias:'base',
    type: 'number',
    demandOption: true
})



.option('l',{
    alias:'listar',
    type: 'boolean',
    demandOption: true,
    default:false
})

.check((argv,options)=>{   //validacion para saber si es numero
    if(isNaN(argv.b)){
        throw 'la base tiene que ser un numero'
    }
    return true
})

.argv

//dando permisos de exportacion a todo el programa por eso se iguala argv el modele.exports
module.exports = argv


/**
 * Yargs es una libreria de node. js para construir aplicaciones capaces de leer lineas de comando.
 * con yargs podemos tener opciones para utlizar internamente
 * 
 * 
 *  "Yargs" es una biblioteca de Node.js que se utiliza para simplificar la creación de interfaces de línea de comandos (CLI) en aplicaciones JavaScript. Yargs facilita la definición y el análisis de argumentos de línea de comandos, opciones y subcomandos en tus aplicaciones Node.js.

Con Yargs, puedes crear scripts que acepten argumentos de línea de comandos de una manera más estructurada y fácil de gestionar. Algunas de las características comunes de Yargs incluyen:

Definición de comandos y opciones con una sintaxis sencilla.
Análisis y procesamiento de los argumentos proporcionados por el usuario.
Generación automática de ayuda y documentación para tu CLI.
Soporte para subcomandos, lo que te permite construir aplicaciones CLI con múltiples funcionalidades.
 */