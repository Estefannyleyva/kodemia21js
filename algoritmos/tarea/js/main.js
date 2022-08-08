let edad = 22;
const gradoDeEstudios = [
    "preescolar",
    "primaria",
    "secundaria",
    "preparatoria",
    "universidad"
];

if (edad >= 3 && edad < 6 ) {
    console.log("actualmente deberias estar cursando" + " " + gradoDeEstudios[0]);
}else if (edad >= 6 && edad <= 11 ) {
    console.log("actualmente deberias estar cursando" + " " + gradoDeEstudios[1]);
}else if (edad >= 12 && edad <= 14 ) {
    console.log("actualmente deberias estar cursando" + " " + gradoDeEstudios[2]);
}else if (edad >= 15 && edad <= 17 ) {
    console.log("actualmente deberias estar cursando" + " " + gradoDeEstudios[3]);
}else if (edad >= 18 && edad <= 25 ) {
    console.log("actualmente deberias estar cursando" + " " + gradoDeEstudios[4]);
}else if (typeof edad !== 'number') {
    console.log("no estas ingresando un numero");
}else {
    console.log("ya no pertenece a un grado de estudios");
}

switch (true) {
    case edad >= 3 && edad < 6:
        console.log("actualmente deberias estar cursando" + " " + gradoDeEstudios[0]);
        
        break;
    case edad >= 6 && edad <= 11:
        console.log("actualmente deberias estar cursando" + " " + gradoDeEstudios[1]);
        
        break;
    case edad >= 12 && edad <= 14:
        console.log("actualmente deberias estar cursando" + " " + gradoDeEstudios[2]);
        
        break;
    case edad >= 15 && edad <= 17:
        console.log("actualmente deberias estar cursando" + " " + gradoDeEstudios[3]);

        break;
    case edad >= 18 && edad <= 25:
        console.log("actualmente deberias estar cursando" + " " + gradoDeEstudios[4]);

        break;
    case edad >= 18 && edad <= 25:
        console.log("actualmente deberias estar cursando" + " " + gradoDeEstudios[5]);
    
        break;
    case typeof edad !== 'number':
        console.log("no estas ingresando un numero");
    
        break;
        
    default:
        console.log("ya no pertenece a un grado de estudios")
        break;
}