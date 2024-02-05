const hostname = "127.0.0.1";
const port = 3000;


const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Express page');
})

app.get('/about', (req, res)=>{
    res.send('About page')
})

app.get('/user/:name/:id', (req, res) =>{
    res.send(`User ID: ${req.params.id}. Username: ${req.params.name}`);
})

app.listen(port,()=>{
    console.log(`Сервер запущен на http://${hostname}:${port}/`);
})


