const flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    passengers: [{
        name: 'aldo',
        edad: 30
    }, {
        name: 'Juan',
        edad: 30
    },
    {
        name: 'Alberto',
        edad: 30
    },
    {
        name: 'Judith',
        edad: 30
    }]
};


let schedules = ['09:00', '10:00', '11:00', '12:00'];

let array = ['Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Judith sale a las 12:00']


// 1.- Funcion que se encargue de parsear elementos
// 2.- Funcion que concatene los elementos(arreglos)
// 3.- Que mande llamar las dos funciones anteriores 
// 4.- El resultado debe ser algo parecido a lo siguiente
// let array = ['Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Judith sale a las 12:00']

function parsear (flight) {
    let passengers = flight.passengers;
    let name = [];

    for (let i=0; i<passengers.length;  i++){
        name[i] = passengers[i].name;
    }
    
    return name;
}

let prueba = parsear(flight);
console.log(prueba)



