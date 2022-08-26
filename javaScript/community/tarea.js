let string = 'Hola bienvenido Koder';
let newString = string.replace(/ /g, '.');
// let newString = string.replaceAll(' ', '.');
console.log(newString)

let string2 = '1 2 3 4 5 6 7 8 9 10';

function split(string) {
    let primeraMitad= ` ${string.slice(0,string.length/2)}`;
    let segundaMitad= `${string.slice(primeraMitad.length-1, string.length)}`;
    return [primeraMitad, segundaMitad];
    
}
console.log(split(string2))

String.prototype.imprimir = function () {
  console.log(arguments);

}
string.imprimir();