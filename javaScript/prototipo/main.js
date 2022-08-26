const cheff = {
    tipo: 'basica',
    cocinar: function (platillo) {
        console.log(`cocinando el ${platillo}`);
    }
}

const fanny = {
    nombre: 'fanny',
    edad: 19,
    profesion: 'developer'
}
 // 1ra manera de llamar la cadena de prototipos
// fanny.__proto__ = cheff;


//segunda manera de llamar una cadena¿
Object.setPrototypeOf(fanny, cheff);

fanny.cocinar('filete');
