import { log } from "console";
import { createServer, IncomingMessage, ServerResponse } from "http";
import { json } from "stream/consumers";

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    //req es el request del parte del Cliente
    //res es el response del Desarrolador
    console.log("Lega del cliente: ", req.url);


    if (req.url === '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain'); 
        return res.end('Estamos en la pagina de contacto');
    }
    
    if (req.url === '/productos') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json'); 
        return res.end(JSON.stringify({productos:['producto1','producto2','producto3']}));
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('Estamos en la pagina de inicio');
})

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
})