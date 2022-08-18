// const jsonData = require('./RickAndMorty.json');
// let personajesInfo = [];

// function personajesFiltrados(personajes) {

//   let contador = 0;
//   for ( personajes of personajes.results ){
    
//     personajesInfo[contador] = {nombre: personajes.name,
//         id: personajes.id, 
//         url: personajes.url, 
//         imagen: personajes.image, 
//         episodios: personajes.episode.slice(0, 4)}
//         contador++
//   } 
   
//     return personajesInfo;
//   }

// console.log(personajesFiltrados(jsonData));




/*------------------------ objeto constructor ------------------------*/
const jsonData = require('./RickAndMorty.json');

function parsearPersonajes(personaje) {
  let personajesArreglo = [];
  let contador = 0;
  for ( let personajes of personaje.results ){
    const personajesParseados = new Object();
    personajesParseados.nombre = personajes.name;
    personajesParseados.id = personajes.id;
    personajesParseados.url = personajes.url;
    personajesParseados.imagen = personajes.image;
    personajesParseados.episodios = personajes.episode.slice(0,5);
    
    personajesArreglo[contador] = personajesParseados;
        contador++
  } 
   return personajesResult;
  }

console.log(parsearPersonajes(jsonData));

