const http = require("http");
const fs = require('fs')


const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        fs.createReadStream('index.html').pipe(res);
    } else if(req.url == '/about')
        fs.createReadStream('about.html').pipe(res);
})

server.listen(port,  hostname, () => {
    console.log(`Сервер запущен на http://${hostname}:${port}/`);
})