//1
let suma = function ( numUno,numDos ) {
    let resultado = numUno + numDos;
    return resultado;
}

console.log( suma( 5,5 ) );
console.log( `El resultado de la suma es: ${suma( 5,5 )}` );

//2

let saludo = function( saludar = "amigo" ){
    return `Hola ${saludar}`;
}

console.log( saludo('Fanny') );
console.log( saludo() );

let saludo2 = ( saludar = "amigo" ) => {
    return `Hola ${saludar}`;
};

console.log( saludo2('Fanny') );
console.log( saludo2() );

//3