let arreglo = [1, 2, 8, 4, 5, 9, 5, 5];
let valorRepetido = 5;
let numerosMayores= function(numeros, repetido) {
    let total = 0;

    for (let i = 0; i < numeros.length; i++) {
       
       if (numeros[i] === repetido) {
          total++;
            
        }
    }
    console.log(total);
}
numerosMayores(arreglo, valorRepetido);