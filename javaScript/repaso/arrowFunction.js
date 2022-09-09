// declaración de funcion
function sumar(numero1, numero2){
    return numero1 + numero2; //retunr explicito 
};
let suma = sumar(10,10);
console.log(suma);


// en las arrow function el retunr puede ir explicitamente o implicitamente
// declaración de funcion
let sumar2 = (num1, num2) => num1 + num2; // return implicito
let suma2 = sumar2(10,10);
console.log(suma2);

// funcion que concatena dos strings
let concatenar = (string1, string2) => string1 + ' ' + string2;
let concatenacion = concatenar('hola', 'Aldo');
console.log(concatenacion);


let sumar = (numero1, numero2) => {
    const PI = 3.1416;
    let resultado = numero1 + numero2 + PI;
    return resultado;  
}
let resultado = sumar(25, 30);
console.log(resultado);