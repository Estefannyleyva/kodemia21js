let fanny = 19;

while (fanny > 18 && fanny < 30){
    console.log('fanny es mayor de edad', fanny);
    fanny++
}
// normalmanete se ocupa cuando se quiere repetir el codigo varias veces
// tambien se puede controlar el ciclo con una condision 


// for: variable que ayuda a controalar el for, condision que se tiene que cumplir y el tercer valor el que va contolando el for
for(let annie = 18; annie < 30; annie++){
    console.log('Annie es mayor de edad', annie)
};//se ocupa para repetir codigo pero de manera más controlada, evalua que sea el caso contrario


//for in recorre objetos
// esto es un objeto literal
const libro = {
    titulo: 'Harry potter y el misterio de JS',
    autor: 'Victor',
    paginas: 300
};
// estamos accediento a ls llaves del objeto y sus valores
for(let nombrePropiedad in libro){
    console.log(nombrePropiedad,
    libro[nombrePropiedad]);
};


// for of recorre arreglos mediante su indice
let frutas = ['fresa', 'mango', 'melon'];
//for of itera sobre objetos iterables
for(let fruta of frutas){
    console.log(fruta);
};
//un objeto iterable; tiene indices 
  //si ejecutamos un for in en un arreglo nos regresa el indice
  for(let indice in frutas){
    console.log(frutas[indice]);//accedemos a los valores mediante el indice
  };


let obj = {
    frutas: ['fresa', 'mango', 'melon'],
    personaje: ['harry', 'sina', 'hector']
}
for(let propiedad in obj){
    //primero ccede a frutas
    //despues ejecuta personajes
    for(let elementos of obj[propiedad]){
        //accedemos al index del arreglo
        console.log(elemento)
    };
};