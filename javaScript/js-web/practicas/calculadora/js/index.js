import * as calculadora from './operaciones.js';
import * as listener from './listener.js';

const operaciones = document.querySelectorAll('.operaciones');
const numeros = document.querySelectorAll('.numeros');
const input = document.getElementById('input');
const igual = document.getElementById('igual');
const limpiar = document.getElementById('limpiar');
let operacion = '';
let num1 = 0;
const operacionesObject = {
    suma: calculadora.sumar,
    resta: calculadora.restar,
    multiplicacion: calculadora.multiplicar,
    division: calculadora.dividir,
    potencia: calculadora.potenciar,
    raiz: calculadora.raiz,
    porcentaje: calculadora.porcentaje
};
function operacionCallback() {
    operacion = this.getAttribute('id');
    num1 = input.value;
    input.value = '';
};

operaciones.forEach((operacion) => operacion.addEventListener('click', operacionCallback));
numeros.forEach((numero) => numero.addEventListener('click', listener.numeroCallback));
limpiar.addEventListener('click', () => {
    input.value = '';
    num1 = 0;
});

igual.addEventListener('click', () => {
    num1 = parseFloat(num1, 10);
    const num2 = parseFloat(input.value, 10); 
    const operacionFinal = operacionesObject[operacion];
    input.value = operacionFinal(num1,num2).toFixed(2);
    
});