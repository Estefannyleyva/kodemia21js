let fibonacci = 6;
function serieFibonacci(serie){
    let actual = 0;
    let contador = 1;
    let resultado = 0;
    for (let index = 0; index < serie-1; index++) {
       resultado = actual + contador;
       actual = contador;
       contador = resultado;
       console.log(resultado);
    }
    console.log(resultado);
}
serieFibonacci(fibonacci);

