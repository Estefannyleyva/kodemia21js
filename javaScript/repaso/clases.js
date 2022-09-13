function Animal(tieneOjos, ojos, corazon, color){
    this.tieneOjos = tieneOjos;
    this.ojos = ojos;
    this.corazon = corazon;
    this.color = color;
    this.comer = (tipoComida) => {
        console.log(`Este vato come esto: ${tipoComida}`);
    };
};
const serpiente = new Animal(true, 2, true, 'verde'); //instancia
console.log(serpiente.corazon);
serpiente.comer('ratones');

const gato = new Animal(true, 2, true, 'gris'); //instancia
console.log(gato.corazon);
gato.comer('Wiskas');


// suggar sintax de una funcion constructora
class Animal2 {
    constructor(tieneOjos, ojos, corazon){
        this.tieneOjos = tieneOjos;
        this.ojos = ojos;
        this.corazon = corazon;
    }
    // metodo
    comer(comida) {
        console.log(`Este vato come esto: ${comida}`);
    };
};

// herencia
class Oviparo extends Animal2 {
     constructor(tieneOjos, ojos, corazon, naceDeHuevo){
        super(tieneOjos, ojos, corazon); // hereda las carectesitas del padre
        this.naceDeHuevo = naceDeHuevo;
     };
};

const perro = new Animal2(true, 2, true); // instancia
console.log(perro.corazon);
perro.comer('dogchow');

const ave = new Oviparo(true, 2, true, true);
console.log(ave)

const squirtle = new Oviparo(true, 2, true, true);
console.log(squirtle)

const otroAnimalRaro = new Oviparo(true, 1, true, true);
console.log(otroAnimalRaro)