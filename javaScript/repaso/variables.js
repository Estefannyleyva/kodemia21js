// con const se debe declarar e inicializar al mismo tiempo
const PI = 3.1416;
//recursion= funcion que se manda a llamar a si misma y cambia los parametros 

// delcaracion de una variable
let nombre;
// inicializacion de una variable
nombre = 'Estefanny'
let numero = 19;
let esMujer = true;
let usuario; //let usuario = undefined;
let auto = null;
let tipoDeDato = typeof nombre; //esto es una expresión
console.log(tipoDeDato);
console.log(usuario); //undefined
// la diferencia de undefined y null: null tiene un valor nulo undefined no tiene un valor

// objeto; coleccion de llaves y datos(valores)
let fruta = {
    color: 'rojo', //llave(color) datos o valores(rojo)
    sabor: 'acido',
    precio: 97,
    hermana: {
        color: 'amarilla',
        sabor: 'dulce',
        precio: 110,
        hermana: {
            color: 'azul',
            sabor: 'agridulce',
            precio: 120,
            hermana: {
                color: 'verde',
                sabor: 'dulce',
                precio: 10,
                hermana: {
                    color: 'rosa',
                    sabor: 'dulce',
                    precio: 80
                },
            },
        },
    }
};

// para acceder a los valores de los objetos se hace por medio de las propiedades
console.log(fruta.hermana.hermana.hermana.hermana.precio); //manera estatica de obtener un valor

//para acceder a los valores del arrglo se hace mediante el indice
let mesesDeCosecha = ['enero', 'febrero']
meses[0]; // traeria 'enero'
meses[1]; // traeria 'febrero'

