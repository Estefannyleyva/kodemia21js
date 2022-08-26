// Declaración  parametros
function generationNombreCompleto(texto1, texto2){
    console.log(texto1 + ' ' + texto2);
    console.log(`${texto1} ${texto2}`);
}
let nombre = 'Fanny'
let apellido = 'Leyva'

// Ejecución de mi función argumentos
generationNombreCompleto( nombre, apellido);


//expresión
let generarNombreCompleto = function(texto1, texto2) {
    console.log(`${texto1} ${texto2}`);
}

function multiplicar(number1, number2) {
    let resultado = number1 * number2;
    return resultado;
}

let numero1 = 5;
let numero2 = 10;
let multiplicacion = multiplicar(numero1, numero2);
console.log(multiplicacion)