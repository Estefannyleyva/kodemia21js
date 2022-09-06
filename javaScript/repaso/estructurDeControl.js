//estructuras de control
let esHumano = true;
// si la condicion se cumple ejecuta lo que esta dentro del if
if(esHumano === true){
    console.log('Fanny es humana');
}// si no se cumple no entra en el if (no ejecuta el console.log)

let usuario = 18;
if(usuario >= 18 && usuario < 30) {
    console.log('Es mayor de edad')
}else if(usuario >= 30) {
    console.log('Es menor de edad')
}else{
    console.log('Es menor de edad')
}// si no se cumple ejecuta esto| caso contrario
// para usar else siempre debe haber un if

let string = 'hola';
switch (string) {
    case 'adios':
        console.log('Es la despedida')
        break;
    case 'hola':
    console.log('Hola mundo')
        break;
    default:
        console.log('Cualquier otro caso')
        break;
}
// estructura de control : controlar que codigo se va a ejecutar
