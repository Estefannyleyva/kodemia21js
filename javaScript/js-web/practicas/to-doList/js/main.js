const body = document.querySelector('body');
function lista(texto){
    const list = document.createElement('li');
    list.innerText = texto;
    return list;
};
function toDo(number){
    const contenedor = document.createElement('div');
    contenedor.id = 'list'

    let listaDesordeada = document.createElement('ul');

    const titulo = document.createElement('h1');
    titulo.innerText = 'To-Do List'
    
    for(let i = 0; i <number; i++) {
        let list = lista(`Tarea ${i+1}`);
        listaDesordeada.appendChild(list);
    }
    
    contenedor.appendChild(titulo)
    contenedor.appendChild(listaDesordeada)
    body.appendChild(contenedor)

};

toDo(10);