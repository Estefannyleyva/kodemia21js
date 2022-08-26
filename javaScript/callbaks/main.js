/*
 * Funciones pasadas como argumentos de otras funciones
 * Podemos trabajar con funciones como si guerasn cualquier otro tipo de valores
 */
function calculadora(numero1, numero2, callbacks) {
    return callbacks(numero1, numero2);
}

let suma = (numero1,numero2) => numero1 + numero2;
console.log(calculadora(10, 10, suma));

/* peticion = solicitud del cliente al servidor....... */
/* parsear = modificar, trasformar datos */

