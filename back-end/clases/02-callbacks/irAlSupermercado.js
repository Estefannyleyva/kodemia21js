/*
    Acciones: 
    1° Ir al supermercado - 5000ms
    2° Pagar la despensa - 3000ms 
    3° Leggar a casa - 4000ms

    callback
*/

function goToSuperMarket(callback) {
    console.log('Llegando al supermercado...');
    setTimeout(() => {
        //
        callback(null,'Hola ya llegue al supermercado');
        // callback('Hubo una manifestación!!', null)
    }, 5000);
};

function payThings(callback) {
    console.log('Haciendo fila para pagar...');
    setTimeout(() => {
        // callback(null, 'Hola, ya pague la despensa');
        callback('Se meolvido el monedero', null)
    }, 3000);
};

function arriveHome(callback) {
    console.log('Llendo a casa...');
    setTimeout(() => {
        callback(null, 'Hola ya estoy en casa :D');
    }, 2000);
}

goToSuperMarket((error, message) =>{
    if (error) {
        console.log('Ah ocurrido algo: ', error);
        return // retorna undefined
        // salidas tempranas
    }
    console.log(message);
    // ya llego al supermercado

    payThings((error, message)=>{
        if (error) {
            console.log('error: ',error)
            return
        };

        console.log(message);
    
        arriveHome((errorArriveHome, message) => {
            if (errorArriveHome) {
                console.log('Error: ',errorArriveHome);
                return
            };

            console.log(message);
        });
    });
});


