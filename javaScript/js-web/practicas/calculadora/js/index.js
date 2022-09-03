import * as calculadora from './operaciones.js';

const body = document.querySelector('body');

function template() {
    let template = `
    <main id="contenedor-general">
    <section id="contenedor">
        <div id="pantalla">
            <input id="input">
        </div>
        
        <section id="calculadora">
            <div class="filas">         
                <button>7</button>
                <button>4</button>
                <button>1</button>
                <button>C</button>
            </div>
            <div class="filas">
                <button>8</button>
                <button>5</button>
                <button>2</button>
                <button>0</button>
            </div>
            <div class="filas">
                <button>9</button>
                <button>6</button>
                <button>3</button>
                <button>.</button>       
            </div>
            <div class="filas">
                <button>÷</button>
                <button>-</button>
                <button>+</button>
                <button>=</button>
                
            </div>
            <div class="filas">
                <button>√</button>
                <button>%</button>
                <button>^</button>
                <button>x</button>
            </div>
        </section>
    </section>    
    </main>`

body.innerHTML = template;
}
template()
// function base(){
    
// }

