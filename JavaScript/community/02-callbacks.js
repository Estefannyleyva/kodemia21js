function avisar (){
    console.log('ya llegue al supermercado');    
}
function irAlSupermercado(callback) {
    console.log('llendo al supermercado');
    console.log('llegando al supermercado');
    callback()//ejecuta la funcion
}

irAlSupermercado(avisar)//pasando la declaración de la funcioón
