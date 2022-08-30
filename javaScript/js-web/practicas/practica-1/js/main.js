const parrafos =  document.querySelectorAll('p');
let cambiarColor = function (parrafos) {
    const colores = ['blue', 'red', 'green', 'purple', 'lime']
    for (let i = 0; i<parrafos.length; i++){
        parrafos[i].style.color = colores[i];
    };
    
};
cambiarColor(parrafos);