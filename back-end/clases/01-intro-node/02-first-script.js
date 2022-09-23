// Crear una funcion que reciba un nombre cono parametro y devuelva un saludo con dicho nombre

// Output  -> 'hola {alguien}, buenas noches'




function saludo(nombre) {
   return `hola ${nombre}, buenas noches`;
};

const saludoFanny = saludo('fanny');

console.log(saludoFanny);

function nombreAleatorio(array){
    const posiciones = array.length;
    let numeroRandom = Math.floor(Math.random() * (posiciones - 0) + 0);
    return array[numeroRandom];
}

const oneNomber = nombreAleatorio(['Fanny','Hector','Rodri','Rafa','Annie', 'Victor']);

console.log(oneNomber);

const firstGreet = saludo(nombreAleatorio());

const nameRandom = nombreAleatorio();

const secondGreet = saludo(nameRandom);

console.log(firstGreet);

console.log(secondGreet);
// se puede pasar como agurmento el valor de una ejecución

function hola(name){
    return `Hola, ${name}, buenas noches`;
}


const x = hola('Xavy');
console.log('x', x);

// Pasar como referencia
const otraFuncion = hola;
console.log(otraFuncion);
const a = otraFunction;
const b = hola;
console.log(b('Rodri'));

// 

const product = () => {}

// Funciones autoejecutables

// factory function -> funciones que generan funciones