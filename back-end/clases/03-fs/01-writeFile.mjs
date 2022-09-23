// const fs = require('fs');

// fs.writeFile('Koder.txt', 'Hola koders desde fs de node', (error) =>{
//     if(error){
//         console.log('Ocurrio un error: ', error);
//         return
//     }
//     console.log('Se ha creado el archivo!!');
// })

import fs from 'fs'; // cambiar la extensión del archivo a .mjs

fs.writeFile('Koder-1.txt', 'Hola koders desde fs de node', (error) =>{
    if(error){
        console.log('Ocurrio un error: ', error);
        return
    }
    console.log('Se ha creado el archivo!!');
});