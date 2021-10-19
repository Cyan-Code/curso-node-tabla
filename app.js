const {crearArchivo} = require('./helpers/multiplicar')
const colors = require('colors');
const {b, h, l} = require('./config/yargs')

console.clear();
// Tablas de multiplicar con node

crearArchivo(b, h, l)
  .then(nombreArchivo => console.log(colors.green(nombreArchivo, 'creado')))
  .catch(err => console.log(err))

