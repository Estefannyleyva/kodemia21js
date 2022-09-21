import { saveTaks, getTasks} from '../js/firebase.js';
import {generateTasks} from '../js/utils.js';
// Obtener datos de la interfaz
const button = document.querySelector('button');

button.addEventListener('click', (event) =>{
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const descripcion = document.querySelector('#description').value;
    saveTaks(title, descripcion);
});

getTasks((tasks) => {
    tasks.forEach(task => {
        const tareaRecibida = task.data();
        console.log(task.data());
        generateTasks(tareaRecibida);
    });
})
// colecciones: conjuto de objetos
