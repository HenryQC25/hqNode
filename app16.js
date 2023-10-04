const {crearArchivo} = require('./helpers/multiplicar4')
const colors = require('colors')
const argv = require('./config/yargs3')

console.clear();
console.log(argv);

crearArchivo(argv.b,argv.h,argv.l)
.then(nombreArchivo =>console.log(nombreArchivo.rainbow, 'creado'))
.catch(err=>console.log(err))
