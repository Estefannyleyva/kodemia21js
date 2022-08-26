let arreglo = ['javascript', 'phyton', 'php', 'C++', 'C#'];
let valorIncluido = 'javascript';
// let valorIncluido = 'node';
let numerosMayores= function(arregloStrings, inluido) {

    for (let i = 0; i <arregloStrings.length; i++) {
       
       if (arregloStrings[i] === inluido) {
          return true;
            
        }else{
            return false;
        }
    }
}
console.log(numerosMayores(arreglo, valorIncluido));