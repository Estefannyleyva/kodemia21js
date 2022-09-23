// falsy && truthy

// truthy --> cualquier valor que evalua a true en una pregunta lógica
// ''
// '1234'
// 1234
// 1.2
// {}
// []

// truthy
const cadena = 'hola';
const cualquierNum = 5;
const objeto = {};
const array = [];

console.log('Cadena', Boolean(cadena));
console.log('Numero', Boolean(cualquierNum));
console.log('Objeto', Boolean(objeto));
console.log('Array', Boolean(array));

// falsy
const cadenaVacia = '';
const cero = 0;
const 