let number1 = 10;
let number2 = 5;
let resultado = true;

if (number1 > number2){
    resultado = true;
    console.log('el primer numero es mayor: ' + resultado)
}else if (number1 < number2) {
    resultado = false;
    console.log('el primer numero es mayor: ' + resultado)
}else if (typeof number1 && number2 !== 'number') {
    console.log('El valor ingresado no es un numero')
}else {
    console.log('el primer numero es mayor: ' + resultado + ' los numeros osn iguales')
}