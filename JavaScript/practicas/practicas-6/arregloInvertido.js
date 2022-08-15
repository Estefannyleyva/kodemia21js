// let arreglo = ['fanny', 'ivan', 'uriel', 'fabi'];
let arreglo = [1, 2, 3, 4, 5];
let longitudDelArreglo = arreglo.length-1;

function arrayInvertido(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        nuevoArray[i] = array [longitudDelArreglo];
        longitudDelArreglo--;
    }
    console.log(nuevoArray);
}
arrayInvertido(arreglo);

/*-----------------------------------------------------------*/

let arrayReverse = ['fanny', 'ivan'];
function arregloReverse(array) {
    array.reverse();
    console.log(array);
}
arregloReverse(arrayReverse);

