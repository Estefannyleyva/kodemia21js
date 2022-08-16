let arregloNumeros = [1, 2, 8, 4, 5];
let numeroMayor= function(numeros) {
    let mayor = 0;
    for (let i = 0; i < numeros.length; i++) {

       if (numeros[i] > mayor) {
            mayor = numeros[i];
            
        }
    }
    return mayor;
}
console.log(numeroMayor(arregloNumeros));