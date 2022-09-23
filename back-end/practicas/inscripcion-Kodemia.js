/*
    realiar el procesor para entrar en kodemia

    1° recibir información | entrevista
    2° Enviar la oferta
    3° Inscripción
    4° Prebootcamp

    Objetivo: Plasmar en funciones y callbacks dicho proceso

    const inscriptionKodemiaFanny = {
        name: 'Fanny Leyva',
        isInterviewed: false, // true
        hasOffer: false,
        isInscript: false,
        canTakeClass: false
    }
*/

function enterToKodemia(callback, alumno) {
    console.log('Empieza el proceso, recibe información');
    setTimeout(() => {
        callback(null, alumno);
    }, 2000);
}

function ofertToKodemia(callback, alumno) {
    console.log('Enviando oferta...');
    setTimeout(() => {
        callback(null, alumno);
    }, 2000);
}

function inscriptionToKodemia(callback, alumno) {
    console.log('realizando inscripción...');
    setTimeout(() => {
        callback(null, alumno);
    }, 2000);
};

function prebootcamp(callback, alumno) {
    console.log('ya estas en el prebootcamp');
    setTimeout(() => {
        callback(null, alumno);
    }, 2000);
}

let inscriptionKodemiaFanny = {
    name: 'Fanny Leyva',
    isInterviewed: false, // true
    hasOffer: false,
    isInscript: false,
    canTakeClass: false
}

enterToKodemia((error, alumno) => {
    if(error){
        console.log('Error: ', error);
        return
    }
   
    alumno.isInterviewed = true;
    console.log(alumno);
    console.log('entrevista realizada');

    ofertToKodemia((error, alumno) => {
        if(error){
            console.log('Error: ', error);
            return
        }
        alumno.hasOffer = true;
        console.log(alumno);
        console.log('Recibe la oferta');

        inscriptionToKodemia((error, alumno) => {
            if(error){
                console.log('Error: ', error);
                return
            }
            alumno.isInscript = true;
            console.log(alumno);
            console.log('Ya estas inscrito');
            
            prebootcamp((error, alumno) => {
                if(error){
                    console.log('Error: ', error);
                    return
                }
                alumno.canTakeClass = true;
                console.log(alumno);
                console.log('Prebootcamp terminado, ya estas dentro de kodemia');

            }, alumno)      
        }, alumno)
    }, alumno)
    
},inscriptionKodemiaFanny)