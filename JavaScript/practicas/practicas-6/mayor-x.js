let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mayor = 4;
let total = 0;
let numerosMayores= function(numeros, mayor) {
    
    for (let i = 0; i < numeros.length; i++) {
        
       if (numeros[i] > mayor) {
          total++;
            
        }
    }
    console.log(total);
}
numerosMayores(arregloNumeros, mayor);