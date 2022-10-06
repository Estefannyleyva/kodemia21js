/*

Crear su servidor

GET /koders -> reponse {"message": "Aquí se obtendrán los koders"}

¿Como reponder con json?

Content-Type: mimetype
*/

// Importamos el modulo http de node
const http = require('http');

// Recibe un requestListener
const server = http.createServer((request, response) => {

    response.setHeader('Content-Type', 'application/json');
    
    if(request.method === 'GET' && request.url === '/koders'){
        // response.setHeader('Content-Type', 'application/json');
        response.write('{"message": "Aquí se obtendrán los koders"}')
    }else if (method === 'POST' && url === '/koders'){
        response.write('{"message": "Aquí puedes crear un Koder"}')
    }else {
        response.write('{"message": "No conozco esa petición"}')
    }
    
    response.end() // cerramos la repuesta
})

server.listen(8080, () => {
    console.log('Server Listening on port 8080')
})
