let lapiz = {
    tamanio: 'pequeño',
    forma: 'hexagonal',
    color: 'amarillo',
    escribir: (texto) =>{
        return `use mi lapiz para escribir el texto ${texto}`;
    }
}
console.log(lapiz.color);
console.log(lapiz.forma);
console.log(lapiz.tamanio);
console.log(lapiz.escribir('Fanny'));