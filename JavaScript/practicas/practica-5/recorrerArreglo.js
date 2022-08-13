// Imprimir cada valor dentro de un arreglo
//con while

const arreglo = ['Rafa', 'Javi', 'Hector', 'Fanny']
let index = 0;
let totalValores = (arreglo.length-1);
function imprimirArreglo (arreglo){
    while (index <= totalValores) {
        console.log(arreglo[index]);
        index++;
    }
}
imprimirArreglo(arreglo);