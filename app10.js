/**
 * Ejercicio - configuracion yargs 
 * 
 */

const {crearArchivo} = require('./helpers/multiplicar3')
const argv = require('yargs')
        .option('b',{
            alias:'base',
            type: 'number',
            demandOption: true
        })

        .check((argv, options)=>{
            if(isNaN(argv.b)){
                throw 'la base tiene qu ser un numero'
            }
            return true
        })

        .argv

        console.clear();

        console.log(process.argv); //INTERNO
        console.log(argv);//DE PAQUETE YARGS
        console.log('base: yargs ', argv.b);

