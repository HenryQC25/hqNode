/**
 * Ejercicio - crear una tabla desde linea de comando 
 * ejemplo escribir en la linea de comandos node app8
 */

const {crearArchivo} = require('./helpers/multiplicar3')


console.clear();

//capturando tercer argumento, se ingresa en consola node app8 --base=5
const [,,arg3='base=5']=process.argv
const [,base=5]=arg3.split('=')

/**
 * esta destructuracion esta capturando por posicion eso es un inconveniente
 * se puede comprobar sin argumentos node app8
 * 
 * 
 * esto tiene muchos invonvenientes ya que acepota cualquier tipo de parametros 
 * por ejemplo node app8 --limite=40 --base=10 , hace la tabla del 40 por ejemplo 
 * 
 */

crearArchivo(base)
    .then(nombreArchivo =>console.log(nombreArchivo, 'creado'))
    .catch(err=>console.log(err))

    /**
     * para correr el app8 es necesario ingresar los siguiente node app8 --base=12 en consola
     * por ejemplo si utilizamos en linea de comandos --help tengo un  manual completo de ayuda 
     * esto lo podemos aplicar para hacer un manual para el uso de nuestra propia app
     * todo esto es bueno paensarloi para validar nuestra app
     */

    