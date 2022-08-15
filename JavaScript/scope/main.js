// scope global
let variableGlobal = 15; 

function saludar() {
    // scope local
    let variableLocal = 10;
    console.log(variableGlobal, variableLocal);
}
saludar ();