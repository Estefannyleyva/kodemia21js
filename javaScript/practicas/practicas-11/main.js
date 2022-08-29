//generar una funcion que me ayude a eliminar un elemento del arreglo, 
//el arreglo y el elemento a eliminar seran los parametros de esta funcion
function removeFromArray (arreglo, eliminar){
    let newArray = [];
    let contador = 0;
    for (let i=0; i<arreglo.length; ++i){
        
        if(arreglo[i]!==eliminar){
            newArray[contador] = arreglo[i];
            contador++
        }
    }
    return newArray;
}
let arregloLimpio1 = removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

let arregloLimpio2 = removeFromArray(['aldo', 'annie'], 'aldo'); // should remove 'aldo' and return ['annie']
console.log(arregloLimpio1,arregloLimpio2);


//Generar una funcion que imprima un saludo en la terminal :D


/*crear una funcion que retorne la palabra(parametro1) 
**repetida el numero de veces que se indique(parametro2)
**returns 'heyheyhey'*/

const repeatString = (palabra, repetir) => {
    let concatenar = '';
    for (let i= 0; i< repetir; i++){
        console.log(palabra);
       concatenar +=  palabra;  
    }
    console.log(concatenar);
}
 
repeatString('hey', 3);


/*Generar una funcion que retorne la palabra(parametro) al reves 
** returns 'aloh */
const reverseString = function (str){
    let nuevoStr = '';
    let longitudDelArreglo = str.length-1;
    for (let i = 0; i < str.length; i++) {
        nuevoStr += str[longitudDelArreglo];
       longitudDelArreglo--;
} 
return nuevoStr;
    };
console.log(reverseString('hola'));

//Generar una funcion que nos ayude a retornar la suma de todos los numeros que hay dentro de los parametros
// 1 + 2 + 3 + 4 = 10 
const sumAll = function (inicio, final) {
    let inicial = 0;
    let suma = 0;
    for (let i =inicio; i < final+1; i++){
        suma += inicial + inicio;
        inicio++
    }return suma;
};
console.log(sumAll(1, 4));
console.log(sumAll(2, 3)); 
console.log(sumAll(1, 6)); // 1 + 2 + 3 + 4 + 5 + 6 = 21


//Generar una función que me ayude a convertir de grados centigrados a farenheit 
const ctof = function (centigrados) {
    const farenheit= 33.8;
    let gradosConvertidos = centigrados*farenheit;
    return `${centigrados}°C equivalen a ${gradosConvertidos} °F`;
};
let resultdo = ctof(5); 
console.log(resultdo);


//generar una funcion que me ayude a indentificar si una palabra es un palindromo  
// false
const palindromes = function (palabra, callback){
    let palabraReverse = callback(palabra)
    if(palabra === palabraReverse){
        return `es un palindromo ` + true;
    }
    return `es un palindromo ` + false;
};

let palindromo = palindromes('reconocer', reverseString);
let palabraX = palindromes('tacos', reverseString);
console.log(palindromo);
console.log(palabraX);


//Escribir una funcion que me retorne los titulos de los libros en un arreglo

const books = [   {     title: 'Book',     author: 'Name'   },   {     title: 'Book2',     author: 'Name2'   } ];
const getTheTitles = function (libros) {
    let title= [];
    for (let i =0; i<libros.length; i++){
        title[i] = libros[i].title;
    }
    return title;
};
let titles= getTheTitles(books) // ['Book','Book2']
console.log(titles)
/*====================================================================*/
const booksMap = [   {     title: 'Book',     author: 'Name'   },   {     title: 'Book2',     author: 'Name2'   } ];
let titlesMap = booksMap.map((books)=>{
    return books.title;
} ) // ['Book','Book2']
console.log(titlesMap);


// Dado un arreglo de usuarios, generar una funcion que retorne al usuario mas viejo

  let userAntiguo = function (user){
    
  };
  console.log(userAntiguo(users))
