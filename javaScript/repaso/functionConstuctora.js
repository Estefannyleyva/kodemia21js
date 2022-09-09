//las funciones constructoras empiezan con mayusculas
// this para un function normal hace referencia al objeto que estamos creando
// this arrowfunction no tiene el contexto definido


// function construcutor this = est@, this hace referencia mi objeto que estoy creando
function Lapiz (tamanio, forma, color){
    this.tamanio = tamanio;
    this.forma = forma;
    this.color = color;
    this.escribir = (texto)=> {
        return `Use mi lapiz para escribir ${texto}`;
    };
};
// new palabra reservada para crear una nueva instancia
let lapizRojo = new Lapiz('pequeño', 'redondo', 'rojo');
console.log(lapizRojo);
let lapizVerde = new Lapiz('grande', 'cuadrado', 'verde');
console.log(lapizRojo);

let textoRojo = lapizRojo.escribir('Este texto lo escribi cn mi lapiz rojo');

console.log(textoRojo);

function Dinosarurio(habitad, tipoDeAlimentacion, epoca){
    this.habitad = habitad;
    this.tipoDeAlimentacion = tipoDeAlimentacion;
    this.epoca = epoca;
    this.rugir = (dino) => `soy un ${dino} y estoy rugiendo Rawr`;
};

const velociraptor = new Dinosarurio('terrestre', 'carnivoro', 'Jurásico');
let rugir = velociraptor.rugir('velociraptor')
console.log(velociraptor, rugir);

// una instancia es la creacion de algo
// extencio es el cambio o modificacion del prototipo o de la nstancia
