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
                <button id="siete">7</button>
                <button id="cuatro">4</button>
                <button id="uno">1</button>
                <button id="limpiar">C</button>
            </div>
            <div class="filas">
                <button id="ocho">8</button>
                <button id="cinco">5</button>
                <button id="dos">2</button>
                <button id="cero">0</button>
            </div>
            <div class="filas">
                <button id="nueve">9</button>
                <button id="seis">6</button>
                <button id="tres">3</button>
                <button id="punto">.</button>       
            </div>
            <div class="filas">
                <button id="division">÷</button>
                <button id="resta">-</button>
                <button id="suma">+</button>
                <button id="igual">=</button>
                
            </div>
            <div class="filas">
                <button id="multiplicacion">x</button>
                <button id="porcentaje">%</button>
                <button id="potencia">^</button>
                <button id="raiz">√</button>
            </div>
        </section>
    </section>    
    </main>`

body.innerHTML = template;
}

template()

function eventos(){
    uno.addEventListener("click", () => input.value += "1")
    dos.addEventListener("click", () => input.value += "2");
    tres.addEventListener("click", () => input.value += "3");
    cuatro.addEventListener("click", () => input.value += "4");
    cinco.addEventListener("click", () => input.value += "5");
    seis.addEventListener("click", () => input.value += "6");
    siete.addEventListener("click", () => input.value += "7");
    ocho.addEventListener("click", () => input.value += "8");
    nueve.addEventListener("click", () => input.value += "9");
    cero.addEventListener("click", () => input.value += "0");
    punto.addEventListener("click", () => input.value += ".");

}

eventos();
let operacion;

 let numero;

function operaciones(){
   
    limpiar.addEventListener("click", () => {
        input.value = "";
    });
    
    suma.addEventListener("click", () => {
        numero = input.value;
        operacion = "suma";
        input.value = "";
        return operacion;
    });
    resta.addEventListener("click", () => {
        operacion = "resta";
        numero = input.value;
        input.value = "";
        return operacion;
    });
    multiplicacion.addEventListener("click", () => {
        operacion = "multiplicacion";
        numero = input.value;
        input.value = "";
        return operacion;
    });
    division.addEventListener("click", () => {
        operacion = "division";
        numero = input.value;
        input.value = "";
        return operacion;
    });
    potencia.addEventListener("click", () => {
        operacion = "potencia";
        numero = input.value;
        input.value = "";
        return operacion;
    });
    raiz.addEventListener('click', () =>{
        operacion = "raiz";
        numero = input.value;
        input.value = "";
        return operacion;
    })
    porcentaje.addEventListener("click", () => {
        numero = input.value;
        operacion = "porcentaje";
        
    });
}
operaciones();
let result = 0;

// prueba raiz
// raiz.addEventListener("click", () => {
//         let num1 = parseInt(numero, 10)
//         
//         // input.value = "";
//         result = calculadora.raiz(num1);
//         input.value = result;
//     });
igual.addEventListener("click", () => {
    let numero2 = input.value
    let num1 = parseFloat(numero, 10)
    let num2 = parseFloat(numero2, 10)
    switch (operacion) {
        case 'suma':
            result = calculadora.sumar(num1,num2);
            input.value = result.toFixed(2);
            break;

        case 'resta':
            result = calculadora.restar(num1,num2);
            input.value = result.toFixed(2);
            break;

        case 'multiplicacion':
            result = calculadora.multiplicar(num1,num2);
            input.value = result.toFixed(2);
            break;

        case 'division':
            result = calculadora.dividir(num1,num2);
            input.value = result.toFixed(2);
            break;

        case 'potencia':
            result = calculadora.potenciar(num1,num2);
            input.value = result.toFixed(2);
            break;

        case 'raiz':
            result = calculadora.raiz(num1);
            input.value = result.toFixed(4);
            break;
        case 'porcentaje':
            result = calculadora.porcentaje(num1,num2);
            input.value = result.toFixed(2);
            break;
    }
});