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


// Genera un script que imprima 10 veces el nombre de tu mascota
const nombreMascota = 'Tommy';
let number = 10;
for (let i = 0; i < number; i++) {
    console.log(nombreMascota, i+1)
};


/* Generar un programa que imprima el nombre de una persona siempre y cuando sea mayor de edad,
si no imprimir "No tengo permiso de usar tus fatos personales" */
let nombrePersona = 'Ivan';
let edadPersona = 18;

if(edadPersona >= 18){
    console.log(`Tu nombre es ${nombrePersona}`);
}else{
    console.log('No tengo permiso de usar tus fatos personales');
};
