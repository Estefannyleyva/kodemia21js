//scope local: dentro de un bloque de codigo
//referencia de donde estan declaradas las variables
//scope globla: se puede utilizar en todos lados
let fecha = '06/09/2022'
function hacerGelatina(sabor, forma) {
    let gelatina = `Esta es la gelatina de sabor ${sabor} y con forma de ${forma} fue hecha ${fecha}`;
    return gelatina;
};

let gelatinaDeIsra = hacerGelatina('jerez','gato')
console.log(gelatinaDeIsra )





