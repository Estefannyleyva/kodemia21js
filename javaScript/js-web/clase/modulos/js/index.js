import saludame from './modulo.js';

//ejecutar
saludame();

//como argumento
function callbak(callback){
    callback();
};
callbak(saludame);

// como valor de variable
let saludo = saludame;

//retornar
function retornarla() {
    return saludame;
};
retornarla()