
//for in
let persona = {
    nombre: 'fanny',
    edad: 19,
    sexo: 'mujer'
}
for (const llave in persona){
    console.log(persona[llave]);
}

// for of
let frutasPreferidas = ['manzana amarilla', 'platano', 'mango' , 'sandia']

for (const fruta of frutasPreferidas){
    console.log(fruta);
}