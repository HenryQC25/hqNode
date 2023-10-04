/**
 * ejercicio operando la app con yargs inicial
 * aca se tiene configurado que se capture -b o --base y que se pueda crear la tabla deseada en un archivo mediante peticiones de consola
 * 
 * 
 */

// utiliza la version de multiplicar3.js que esta en helpers

const {crearArchivo} = require('./helpers/multiplicar3')

const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true

            })

            .check((argv, options)=>{
                if(isNaN(argv.b)){
                    throw 'la base tiene que ser un numero'
                }
                return true
            })
            .argv

            console.clear();
            console.log(argv);

            //se agrego trabajo especifico con la base b y se dispara el error si no es numero

            crearArchivo(argv.b)
            .then(nombreArchivo =>console.log(nombreArchivo, 'creado'))
            .catch(err=>console.log(err))
        