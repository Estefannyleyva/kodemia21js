let edad = 22;

if (edad >= 3 && edad < 6 ) {
    console.log("actualmente deberias estar cursando preescolar")
}else if (edad >= 6 && edad <= 11 ) {
    console.log("actualmente deberias estar cursando primaria")
}else if (edad >= 12 && edad <= 14 ) {
    console.log("actualmente deberias estar cursando secundaria")
}else if (edad >= 15 && edad <= 17 ) {
    console.log("actualmente deberias estar cursando preparatoria")
}else if (edad >= 18 && edad <= 25 ) {
    console.log("actualmente deberias estar cursando universidad")
}else {
    console.log("ya no pertenece a un grado de estudios")
}

switch (true) {
    case edad >= 3 && edad < 6:
        console.log("actualmente deberias estar cursando preescolar");
        
        break;
    case edad >= 6 && edad <= 11:
        console.log("actualmente deberias estar cursando primaria");
        
        break;
    case edad >= 12 && edad <= 14:
        console.log("actualmente deberias estar cursando secundaria");
        
        break;
    case edad >= 15 && edad <= 17:
        console.log("actualmente deberias estar cursando preparatoria");

        break;
    case edad >= 18 && edad <= 25:
        console.log("actualmente deberias estar cursando universidad");

        break;
    case edad >= 18 && edad <= 25:
        console.log("actualmente deberias estar cursando universidad");
    
        break;
        
    default:
        console.log("ya no pertenece a un grado de estudios")
        break;
}