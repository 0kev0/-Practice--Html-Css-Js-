/*const fs = require('fs');
let data = '';
let ReadableStream = fs.createReadStream(__dirname + '/input.txt');
//chunk =>fraccion

ReadableStream.on('data',function (chunk)
{
console.log(chunk);
}
);
 */


//////FUNCIONES////////////////////////////////////
function escribirNombre(nombre,apellido)
{
    let Fname = nombre + " " + apellido;
    return Fname;

}

console.log(escribirNombre("juan","carlos"));

let triple = function (numero)
{
    return numero;
}
 
const tri = triple;
console.log(tri(10))
