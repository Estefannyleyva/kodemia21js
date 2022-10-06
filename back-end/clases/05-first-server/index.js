
// Importamos el modulo http de node
const http = require('http');

// Recibe un requestListener
const server = http.createServer((request, response) => {

    const url = request.url
    console.log('url: ', url);
    const method = request.method
    console.log('method: ', method)

    if(method === 'GET' && url === '/koders'){
        response.write('Aquí estarán todos los koders')
    }else if (method === 'POST' && url === '/koders'){
        response.write('Aquí puedes crear un Koder')
    }else {
        response.write('No conozco está solicitud')
    }
    // response.write('Hola desde mi servidor en node!! :3');
    response.end() // cerramos la repuesta
})

// Poniendo a escuchar enun puerto al server

/*
    8080 -> ambiente de desarrollo
    http -> 80
    https -> 443
    ssh -> 22
 */
server.listen(8080, () => {
    console.log('Server Listening on port 8080')
})

/* 
Ejercicio: 
    Reaccionar a las sigientes rutas:

    GET/koders -> Aquí estarán todos los koders
    POST/koders -> Aquí estarán todos los koders
    X/x -> No conozco está solicitud
*/