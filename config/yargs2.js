/**
 * se agrega un describe para que en la ayuda del uso de la app con help 
 * describa de mejor forma la app
 */

const argv = require('yargs')   //usar la variable argv para configurar y acceder a los argumentos de línea de comandos.

.option('b',{
    alias:'base',
    type: 'number',
    demandOption: true,
    describe: 'es la base de la tabla de multiplicar'
})

.option('h',{
    alias:'hasta',
    type: 'number',
    demandOption: true,
    describe: ' limite de iteraciones'
})

.option('l',{
    alias:'listar',
    type: 'boolean',
    demandOption: true,
    describe: 'muestra la tabla en consola'
    //default:false              se quita ya que esta por default en la app principal
})

.check((argv,options)=>{
    if(isNaN(argv.b && argv.h)){
        throw 'la base tiene que ser un numero'
    }
    return true
})

.argv

module.exports = argv


/**
 *  Los atributos del objeto son:

alias: 'base': Esto define un alias para la opción -b, de modo que se puede usar tanto -b como --base para especificar esta opción.
type: 'number': Esto especifica que el valor de esta opción debe ser de tipo número.
demandOption: true: Esto indica que esta opción es obligatoria y debe ser proporcionada por el usuario.
describe: 'es la base de la tabla de multiplicar': Esta es una descripción que se muestra cuando se ejecuta el programa con la opción --help.


.argv: Esto finaliza la configuración de Yargs y almacena los argumentos de línea de comandos procesados en la variable argv.

module.exports = argv: Esto exporta la variable argv para que pueda ser utilizada en otros módulos de Node.js. Puedes acceder a los valores de las opciones de línea de comandos a través de argv en otros archivos de tu aplicación.
 */