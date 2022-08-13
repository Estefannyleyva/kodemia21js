function saludar (prefijo , nombre){
    console.log(`hola ${prefijo} ${nombre}`);
    console.log(arguments);
};
saludar('Srta.', 'Fanny');

//arrowFunction
const saludar = (prefijo, nombre)=> {
    console.log(`hola ${prefijo} ${nombre}`);
};
saludar('Srta.', 'Fanny');