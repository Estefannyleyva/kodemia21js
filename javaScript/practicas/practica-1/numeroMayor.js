let number1 = 5;
let number2 = 6;
let resultado = true;

if (number1 > number2){
    resultado = true;
    console.log('el primer numero es mayor: ' + resultado)
}else if (number1 < number2) {
    resultado = false;
    console.log('el primer numero es mayor: ' + resultado)
}else if( number1 === number2){
    resultado = false;
    console.log('el primer numero es mayor: ' + resultado + ', los numeros son iguales')
}else {
    console.log('el valor ingresado no es un numero')
}