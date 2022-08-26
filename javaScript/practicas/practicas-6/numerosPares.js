let numeros = [1, 2, 3, 4, 6, 7, 8, 9, 10];


const numerosPares = function (numeros) {
    let numerosParesLista = [];
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
       
       if (numeros[i] % 2 === 0 ) {
          numerosParesLista[contador] = numeros[i];
          contador++;   
        }
    }
    return numerosParesLista;
}

console.log(numerosPares(numeros));