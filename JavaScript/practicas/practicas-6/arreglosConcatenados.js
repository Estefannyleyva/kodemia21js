let primerArreglo = ['Hector', 'Rodri', 'Emanuel', 'Javi'];
let segundoArreglo = ['Jona', 'Manu', 'Cin', 'Deni'];
let tercerArreglo = ['Vic', 'Xavy', 'Annie', 'Fanny'];
 let arreglosConcatenados = function (arreglo_1, arreglo_2, arreglo_3) {
     let koders = [];
        koders = [...arreglo_1, ...arreglo_2 , ...arreglo_3];
        koders = [...arreglo_1, ...arreglo_2 , ...arreglo_3];

    return koders;
  };
  console.log(arreglosConcatenados(primerArreglo, segundoArreglo, tercerArreglo));
