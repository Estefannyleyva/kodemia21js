let arreglo = ['manzana', 'platano', 'guayaba', 'cereza', 'fresa', 'sandia'];

let mitadArreglo = function (array) {
    let mitad = array.length / 2;
    let nuevoArreglo = [];
    for (let i = 0; i < array.length/2; i++) {
       
        nuevoArreglo[i] = array[mitad];
        mitad++;
    }
    return nuevoArreglo;
};
console.log(mitadArreglo(arreglo));