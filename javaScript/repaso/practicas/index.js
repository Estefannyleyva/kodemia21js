// variables por cada tipo de dato
const name = 'Fanny';
let edad = 19;
let programa = true;
let carro = null;
const vidaSocial = undefined;
let mascota = {
    animal: 'gato',
    nombre: 'tommy',
    raza: 'siames',
    meses: 8
};
let koders = ['Hector', 'Sina', 'Annie', 'Victor', 'Xavy'];



// Generar un objeto que represente un auto
let auto = {
    marca:'Tesla',
    modelo: 'Model S',
    color: 'negro',
    puertas: 4,
    precio: 3419300,
};



// Generar un arreglo 
let multiplosDeDos = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let arreglo = ['hola', 5, true, null, 'Fanny', undefined];



// Genera un script que imprima 10 veces el nombre de tu mascota
console.log('-----------Ejercicio 4-----------')
const nombreMascota = 'Tommy';
let number = 10;
for (let i = 0; i < number; i++) {
    console.log(nombreMascota, i+1);
};
function mascotaNombre (mascota, vecesAImprimir){
    for (let i = 0; i < vecesAImprimir; i++) {
        console.log(mascota, i+1);
    };
};
mascotaNombre('Venus', 10);



/* Generar un programa que imprima el nombre de una persona siempre y cuando sea mayor de edad,
si no imprimir "No tengo permiso de usar tus fatos personales" */
console.log('-----------Ejercicio 5-----------')

let nombrePersona = 'Ivan';
let edadPersona = 18;
// con ciclo
if(edadPersona >= 18){
    console.log(`Tu nombre es ${nombrePersona}`);
}else{
    console.log('No tengo permiso de usar tus fatos personales');
};
//funciones y ciclo
function mayorDeEdad(nombre, edad){
    if(edad >= 18){
        console.log(`Tu nombre es ${nombre}`);
    }else{
        console.log('No tengo permiso de usar tus fatos personales');
    };
    
};
mayorDeEdad('Fanny', 19);
mayorDeEdad(nombrePersona, edadPersona);



// Generar un programa que ayude a imprimir en consola el valor de cada una de las propiedades del objeto
console.log('-----------Ejercicio 6-----------')

let usuario = {
    nombre: 'Fanny',
    edad: 19,
    contrasenia: 'password*2022'
}
// con ciclo
for(let obj in usuario){
    // console.log(obj, usuario[obj]); si quiero las propieddas y su valor
    console.log(usuario[obj]);// solo los  valores 
}
// con funcion y ciclo
function recorrerObjeto(objeto){
    let nuevoObjecto = {}
    for(let obj in objeto){
        // console.log(obj, objeto[obj]); si quiero las propieddas y su valor
        console.log(objeto[obj]);// solo los  valores 
    }
};
recorrerObjeto(usuario)
recorrerObjeto(auto)
recorrerObjeto(mascota)



// Genera un rpograma que me ayude a imprimir el contenido de un arreglo elemento por elemento
console.log('-----------Ejercicio 7-----------')

let frutas = ['fresa', 'melon', 'mango','kiwi'];
function imprimirArray(array) {
    for(let elemento of array){
        console.log(elemento);
    };
}
imprimirArray(frutas);
imprimirArray(multiplosDeDos);
imprimirArray(['hola', 5, true, null, 'Fanny', undefined]);