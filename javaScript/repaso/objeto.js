// objeto literal
//  astraccion de un ibjeto que existe en la vida real
// se plasman las caractestiscas que puede tener un objeto
// propiedades: caracteristicas con valores
// metodos: acciones que puede realizar el objeto
let carro = {
    puertas: 4, // las propiedad tambien se conocencomo llaves
    color: 'gris',
    marca: 'seat',
    llantas: 4
};

//asignar valor a una propiedad
carro.duenio = 'Fanny';// se crea la propiedad si no existe y se le asigna el valor
 if(carro.duenio !== undefined){
    console.log('La propieda si existe');
 }else {
    console.log('La propieda no existe');
 };
console.log(carro['puertas']);

for(let caracteristica in carro){
    console.log(caracteristica);
}