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
const saludar = function (saludo){
    console.log(saludo)
}
saludar('hola mundo') // Hola mundo

const saludar2 = function (name){
    console.log(`hola bievenid@ ${name}`)
}
saludar2('Fanny')


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
    const farenheit= 32;
    let gradosConvertidos = centigrados * 9/5 + farenheit;
    return `${centigrados}°C equivalen a ${gradosConvertidos} °F`;
};
let resultdo = ctof(27); 
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
// ejercicio 7
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
const users = [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Josep",
      last: "Ibáñez",
    },
    location: {
      street: {
        number: 939,
        name: "Avenida del Planetario",
      },
      city: "Vigo",
      state: "Ceuta",
      country: "Spain",
      postcode: 57298,
      coordinates: {
        latitude: "-30.5972",
        longitude: "-31.5788",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "josep.ibanez@example.com",
    login: {
      uuid: "a6712f78-f81c-4681-867b-3b3969273728",
      username: "heavyostrich299",
      password: "gateway2",
      salt: "7IgVyGfW",
      md5: "d3e1b044664fd40910c7b662bfbd3085",
      sha1: "f55ac6b6532efa468f2471d4aad51e9c576463de",
      sha256:
        "f1ad22414565e84f3ad0f5817be43a1e0d1b04f8ba450f108552d51cca8e0433",
    },
    dob: {
      date: "1985-11-05T13:09:27.074Z",
      age: 36,
    },
    registered: {
      date: "2006-05-07T14:04:59.175Z",
      age: 16,
    },
    phone: "936-142-415",
    cell: "690-607-181",
    id: {
      name: "DNI",
      value: "55691398-Z",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/60.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/60.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/60.jpg",
    },
    nat: "ES",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Aubrey",
      last: "Singh",
    },
    location: {
      street: {
        number: 7876,
        name: "15th St",
      },
      city: "Delta",
      state: "Alberta",
      country: "Canada",
      postcode: "X5T 4C5",
      coordinates: {
        latitude: "79.0496",
        longitude: "-178.5756",
      },
      timezone: {
        offset: "+4:30",
        description: "Kabul",
      },
    },
    email: "aubrey.singh@example.com",
    login: {
      uuid: "b0b2d289-ae25-4fdf-9e2d-cac0403db5c7",
      username: "silverlion190",
      password: "house",
      salt: "1RvYDkxO",
      md5: "090480c16efe84ce8aba08d59a3a1b68",
      sha1: "fe1648dcc4b6f529bfe234ffb122d595bd6f76c2",
      sha256:
        "ce72faccc8c5d46b206e253c03bfb454ac3fab63c39854c4663c38a7cce9f5be",
    },
    dob: {
      date: "1951-04-11T17:05:34.955Z",
      age: 71,
    },
    registered: {
      date: "2018-02-18T08:10:31.620Z",
      age: 4,
    },
    phone: "T56 E86-6334",
    cell: "B07 B00-9509",
    id: {
      name: "SIN",
      value: "558452181",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/75.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/75.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
    },
    nat: "CA",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Jeanne",
      last: "Claire",
    },
    location: {
      street: {
        number: 5835,
        name: "Balmoral St",
      },
      city: "Red Rock",
      state: "British Columbia",
      country: "Canada",
      postcode: "L2Z 6F8",
      coordinates: {
        latitude: "-60.5684",
        longitude: "-44.4728",
      },
      timezone: {
        offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "jeanne.claire@example.com",
    login: {
      uuid: "a7c811cc-c9a2-4daa-9571-0c010f90fac4",
      username: "yellowbutterfly786",
      password: "airforce",
      salt: "TKAVno6z",
      md5: "c76413ccb6a1364137c592906665575d",
      sha1: "3a835448381aaf9455d2a62d2c87dd81eb93dda0",
      sha256:
        "e149c2b993a25322bba4405c54e056e2e9abe5ee962bf32ea44d7a3439f7cd68",
    },
    dob: {
      date: "1969-08-17T09:12:49.816Z",
      age: 53,
    },
    registered: {
      date: "2007-12-27T06:31:19.130Z",
      age: 14,
    },
    phone: "R00 I88-5473",
    cell: "S50 T70-5996",
    id: {
      name: "SIN",
      value: "259476562",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/69.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/69.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/69.jpg",
    },
    nat: "CA",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Karol",
      last: "Lende",
    },
    location: {
      street: {
        number: 3984,
        name: "Bolette Brygge",
      },
      city: "Tjøme",
      state: "Vest-Agder",
      country: "Norway",
      postcode: "3884",
      coordinates: {
        latitude: "-14.3318",
        longitude: "48.6568",
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "karol.lende@example.com",
    login: {
      uuid: "2db8b6dd-d51a-4cde-b349-41288d7843d2",
      username: "yellowgoose704",
      password: "lamer",
      salt: "DynwefT5",
      md5: "31f83f4688875d8d9f1207c74fa60d48",
      sha1: "2cd55f28e0abcaff85928e2cde79a6b334151679",
      sha256:
        "156de9e7e16532bcfbd759d96cf2948710036a5c09a4b85a8615575cea1bff50",
    },
    dob: {
      date: "1978-04-16T18:31:59.833Z",
      age: 44,
    },
    registered: {
      date: "2010-11-13T14:18:27.728Z",
      age: 11,
    },
    phone: "54434825",
    cell: "46477959",
    id: {
      name: "FN",
      value: "16047841511",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/61.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/61.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/61.jpg",
    },
    nat: "NO",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Mechthild",
      last: "Kammerer",
    },
    location: {
      street: {
        number: 1474,
        name: "Mühlenweg",
      },
      city: "Attendorn",
      state: "Brandenburg",
      country: "Germany",
      postcode: 19587,
      coordinates: {
        latitude: "71.0655",
        longitude: "22.4886",
      },
      timezone: {
        offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "mechthild.kammerer@example.com",
    login: {
      uuid: "b7181f93-4492-4b15-b96c-33e61f1c74ba",
      username: "orangecat657",
      password: "whiskers",
      salt: "cqcsBqTu",
      md5: "93e142ca7d73642a55a76123106d82ce",
      sha1: "72ec5a9ec4a3c3f76309ebf6f02a519ad122ed98",
      sha256:
        "e00da02c23ce180d0034f54ecf45f26faa9f1fc0e85b2eed1c23a291a0c0ebfd",
    },
    dob: {
      date: "1996-03-19T11:33:27.981Z",
      age: 26,
    },
    registered: {
      date: "2003-01-08T11:47:51.002Z",
      age: 19,
    },
    phone: "0251-1926656",
    cell: "0171-2741280",
    id: {
      name: "SVNR",
      value: "53 190396 K 574",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/55.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/55.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/55.jpg",
    },
    nat: "DE",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Jade",
      last: "Sirko",
    },
    location: {
      street: {
        number: 99,
        name: "St. Lawrence Ave",
      },
      city: "Dorchester",
      state: "Yukon",
      country: "Canada",
      postcode: "F5Q 4F9",
      coordinates: {
        latitude: "-88.3750",
        longitude: "-148.9561",
      },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City",
      },
    },
    email: "jade.sirko@example.com",
    login: {
      uuid: "5de87b5b-90cb-408f-bb42-e6d3da7b3095",
      username: "smallcat899",
      password: "jacques",
      salt: "5UoCGuOp",
      md5: "ad00d82e70ae118268c25794f356d502",
      sha1: "469a5f1642cbbd7234a516f4f5250bb53460b9b1",
      sha256:
        "35e52d4d713e4adcf44251ce92638701781f54163f1f74410b1cfb952d20d284",
    },
    dob: {
      date: "1997-06-07T10:55:18.039Z",
      age: 25,
    },
    registered: {
      date: "2006-10-26T16:36:28.202Z",
      age: 15,
    },
    phone: "C31 K61-3679",
    cell: "W35 U05-1716",
    id: {
      name: "SIN",
      value: "062956610",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/27.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
    },
    nat: "CA",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Lori",
      last: "Collins",
    },
    location: {
      street: {
        number: 9719,
        name: "Bruce St",
      },
      city: "Huntington Beach",
      state: "Maine",
      country: "United States",
      postcode: 67398,
      coordinates: {
        latitude: "-77.7351",
        longitude: "-111.4036",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "lori.collins@example.com",
    login: {
      uuid: "128dbb60-e7d8-434f-a093-fa041d1f0e99",
      username: "browngorilla182",
      password: "brazil",
      salt: "1RKwPRos",
      md5: "11a1f3d00cf7d5dc45a254375deb884c",
      sha1: "df85847a566fe31223f9f3e61cc6a00ed1407eb9",
      sha256:
        "14c7905062f75e49dc93ca8fcdf8419fd803ffa05369eccf9acb323dce2ba1a4",
    },
    dob: {
      date: "1944-11-20T19:45:04.173Z",
      age: 77,
    },
    registered: {
      date: "2003-05-31T07:46:03.115Z",
      age: 19,
    },
    phone: "(510) 701-4708",
    cell: "(231) 375-8685",
    id: {
      name: "SSN",
      value: "748-48-1025",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/70.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/70.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/70.jpg",
    },
    nat: "US",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Fiona",
      last: "Valvik",
    },
    location: {
      street: {
        number: 3402,
        name: "Kabelgata",
      },
      city: "Slettebrotane",
      state: "Nordland",
      country: "Norway",
      postcode: "1590",
      coordinates: {
        latitude: "-19.7858",
        longitude: "73.1238",
      },
      timezone: {
        offset: "+7:00",
        description: "Bangkok, Hanoi, Jakarta",
      },
    },
    email: "fiona.valvik@example.com",
    login: {
      uuid: "6c20e784-e255-4592-90fa-c034d87d0fa5",
      username: "greentiger833",
      password: "gasman",
      salt: "FEgIId28",
      md5: "9aa29782a3d25eab73f475c45fffd341",
      sha1: "fd72ab462bcf0becd8d971902e676d8a54b0b615",
      sha256:
        "7e83aced68daa138ee5a22e4218140d03b832599e9df134974f50c429d9c06ef",
    },
    dob: {
      date: "1977-05-02T13:15:34.135Z",
      age: 45,
    },
    registered: {
      date: "2015-09-04T20:48:02.309Z",
      age: 6,
    },
    phone: "68938487",
    cell: "40992681",
    id: {
      name: "FN",
      value: "02057711828",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/38.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/38.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/38.jpg",
    },
    nat: "NO",
  },
];
let userAntiguo = function (user) {
  let contador = 0;
  let usuario = [];
  for (let i = 0; i < user.length; i++) {
    if (user[i].dob.age > contador) {
      contador = user[i].dob.age;
      usuario = user[i];
    }
  }
  return usuario;
};
console.log(userAntiguo(users));

  
// Generar un programa que sea una calculadora
/* suma, resta, multiplicacion, potencia, division*/
let calculadora = function (operacion, operando1, operando2){
    switch (operacion) {
            case 'suma':
                return `el resultado de ${operacion} es ` + (operando1 + operando2);

            case 'resta':
                return `el resultado de ${operacion} es ` + (operando1 - operando2);

            case 'multiplicacion':
                return `el resultado de ${operacion} es ` + operando1 * operando2;
            case 'potencia':
                return `el resultado de ${operacion} es ` + operando1 ** operando2;
            case 'division':
                return `el resultado de ${operacion} es ` + operando1 / operando2;
            default:
                return `la operacion no esta soportada por la calculadora`
    }
}
console.log(calculadora('suma', 5, 2));
console.log(calculadora('resta', 5, 2));
console.log(calculadora('multiplicacion', 5, 2));
console.log(calculadora('potencia', 5, 2));
console.log(calculadora('division', 5, 2));


// Generar una funcion que limpie los elementos de un arreglo repetidos usando filter
const numeros = [1,2,3,4,5,3,3,1,2];
const limpiarRepetidos = function (array){
    let filter = array.filter((item,index)=>{
        return array.indexOf(item) === index;
    })
    return filter;
}; 
console.log(limpiarRepetidos(numeros));// return [1,2,3,4,5]


/*=============================avanzados====================*/

// Implementar el metodo filter con ayuda de reduce
const myOwnReduce = () => [] // arreglo filtrado


// Escribe un metodo que retorne un nuevo objeto sin las propiedades pasadas como argumentos
function cleanObject (object, string){
  let newobject = {};
  if (object[string]){
    return false;
  }else{
    Object.assign({}, object);
    return true;
  }
}
console.log(cleanObject({ a: 1, b: 2 }, 'b')); // return { a: 1 }

//Generar una funcion que me ayude a convertir una palabra  o frase a formato snake_case
let snakeCase = function (str){ 

};
console.log(snakeCase('Hello, World!')); // hello_world
console.log(snakeCase('snakeCase')); // snake_case


// Generar funcion que convierta un objeto en un arreglo de arreglos
let generarPares = function (obj){
    let array = Object.entries(obj);
    return array;
};
console.log(generarPares({ a: 1, b: 2 })); // return [['a', 1], ['b', 2]]


// Generar una funcion que quite todos los valores falsy de un arreglo
let arregloSucio = [0, 1, false, 2, undefined, '', 3, null];
let cleanFalsyValues = function (array){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if(array[i]){
            newArray.push(array[i]);
        }
    };return  newArray;
};
console.log(cleanFalsyValues(arregloSucio)); // return [1, 2, 3] arregloLimpio 


//Generar una funcion que compare dos arreglos
let sonIguales = function (str1, str2) {
    for (let i = 0; i<str1.length; i++)
    if (str1[i] === str2[i]){
        return true;
    }else {
        return false;
    }
}
console.log(sonIguales([1, 2, 3], [1, 2, 3])); // return true
console.log(sonIguales([{nombre: 'aldo'}, 2, 3], [{nombre: 'aldo'}, 2, 3])); // return true

