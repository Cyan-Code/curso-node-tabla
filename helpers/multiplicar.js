const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, hasta = 10, listar = false) => {
  try {
    let salida, consola = '';
    for (let i = 1; i <= hasta; i++) {      
      salida += (`${base} ${'x'.yellow} ${i} = ${i*base}\n`);
      consola += (`${base} x ${i} = ${i*base}\n`);
    }
    if (listar) {
      console.log(salida)
    }
    fs.writeFileSync(`./salida/table-${base}.txt`, consola);
    return `tabla - ${base}.txt`
  } catch (error) {
    throw error
  }
}


module.exports = {
  crearArchivo
}
