//// Ejercicio 8
let saludo = () => 'Hola Koders';
let saludar = saludo();
console.log(saludar);


// Ejercicio 9
let calculadora = (operacion, numero1, numero2) => {
    if(operacion === 'suma'){
        return numero1 + numero2;
    }else if(operacion === 'resta'){
        return numero1 - numero2;
    }else if(operacion === 'multiplicacion'){
        return numero1 * numero2;
    }else if(operacion === 'division'){
        return numero1 / numero2;
    }else{
        return 'La operacion esta soportada por la calculadora';
    }
};
let sumar = calculadora('suma', 10, 10);
let restar = calculadora('resta', 10, 10);
let multiplicacion = calculadora('multiplicacion', 10, 10);
let division = calculadora('division', 10, 10);
console.log(sumar, restar, multiplicacion, division);


// Ejercicio 10
let objetoLiteral = (nombre,apellidoP,apellidoM,edad,genero, direccion ) => {
    return {
        nombre: {
            name: nombre,
            apellidoPaterno: apellidoP,
            apellidoMaterno: apellidoM
        },
        edad: edad,
        genero: genero,
        direccion: direccion
    };
}
let objeto = objetoLiteral('Fanny','Perez','Leyva','19','F','direccion');
console.log(objeto);


// Ejercicio 11
let nombresKoders = [
    "fanny",
    "Xavy",
    "Cin",
    "Fer",
    "Deni",
    "Rafa",
    "Vic",
    "Jona",
    "Hector",
    "Anne",
    "benja",
  ];
  
let imprime = (lista) => {
    for (let nombre of lista) {
      console.log(nombre);
    }
  }
imprime(nombresKoders);
  


// Ejercicio 12
let alumno = (koders, alumno) => {
    let koder;
    for(let nombre of koders){
        if(nombre === alumno){
            koder = nombre;
        }
    }
    if(koder !== undefined){
        console.log(koder);
    }else{
        console.log('Este koder no pertenece a esta generación');
    }
};
alumno(nombresKoders, "benja");


// Ejercicio 13
let generarArreglo = (string) => {
    let arreglo = [];
    for (let i = 0; i < string.length; i++) {
        arreglo[i] = string[i];
    }
    return arreglo;
};
let arreglo = generarArreglo('hola'); 
console.log(arreglo); // ['h', 'o', 'l', 'a']


// Ejercicio 14
let sumarElementos = (arrayNumeros) => {
    let inicial = 0;
    let suma = 0;
    for(let numero of arrayNumeros){
        suma = inicial + numero;
        inicial = suma;
    }
    return suma;
};
let suma = sumarElementos([1,2,3,4,5]);
console.log(suma);


// Ejercicio 15
let limpiarArreglo = (array) => {
    let arregloLimpio = [];
    
    for (const numeros of array) {
        let i = 0;
        if (numeros <= 10) {
            arregloLimpio[i] = numeros;
            i++;
        }
    }
    return arregloLimpio;
};
let nuevoArreglo = limpiarArreglo([11,12,3,4,15,5,8,10,20,1,2]); 
console.log(nuevoArreglo); // [3,4,5,8,10,1,2]


// Ejercicio 16
let numeroDeDia = (dia) => {
    let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    for (const posicion of dias) {
        if (dia === posicion) {
            console.log(dias.indexOf(dia));
        }
    };
};
numeroDeDia('viernes')


// Ejercicio 17
let listaKoders = ['Hector', 'Manu', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 
'Rafa', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie'];

let quitarKoder = (koder) => {
    let nuevaLista = []; 
    let posicion = 0;
    for(let nombresKoder of listaKoders){
       
        if(nombresKoder !== koder){
            nuevaLista[posicion] = nombresKoder;
            posicion++
        }
    };
    listaKoders = nuevaLista;
    console.log(listaKoders)
};
quitarKoder('Manu');// ['Hector', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Rafa', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie'];
quitarKoder('Rafa');// ['Hector', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie'];
quitarKoder('Xavy');// ['Hector', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Annie'];
quitarKoder('Fanny');// ['Hector', 'Jonathan', 'Fernando', 'Cintia', 'Rodri', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Annie'];