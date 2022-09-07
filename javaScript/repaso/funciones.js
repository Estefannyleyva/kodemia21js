// parametro: valores que vamos a utilizar para hacer una acción
// los parametros reciben valores 
//declaración de función
function imprimirNombre(nombre){
    console.log('Mi nombre es ' + nombre);
    return `Mi nombre es ${nombre}`
};

function hacerGelatina(sabor, forma) {
    return `Esta es la gelatina de sabor ${sabor} y con forma de ${forma}`
};

// imprimirNombre('Fanny');//ejecucion de la funcion
console.log(hacerGelatina('limon', 'estrella'));
console.log(hacerGelatina('fresa', 5));

/* como hacer una función: 
que queremos que haga
parametro: que necesito para lograr hacerlo

*/




// declaracion 
function irAlSuperMercado(callback) {
    console.log('Llendo al super mercado');
    console.log('Llegue al supermercado');
    callback(); // es lo mismo que avisar()  'Mama, ya llegue al supermercado'
}
// declaracion 
function avisar () {
    console.log('Mama, ya llegue al supermercado');
};
// declaracion 
function hacerGelatina(sabor, forma) {
    return `Esta es la gelatina de sabor ${sabor} y con forma de ${forma}`
};

// Ejecutar la función hacerGelatina
console.log(hacerGelatina('chocolate', 'cuadrada'))

// Ejecutar la funcion irAlSupermercado
irAlSuperMercado(avisar);

// Ejecutar la función avisar
avisar()
