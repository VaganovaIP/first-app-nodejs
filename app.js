const hostname = "127.0.0.1";
const port = 3000;


const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));//подключение статических файлов

app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/user/:name', (req, res) =>{
    res.render('user', {name: req.params.name});
})

app.listen(port,()=>{
    console.log(`Сервер запущен на http://${hostname}:${port}/`);
})

app.post('/check-user', (req, res) =>{
    let username = req.body.username;
    if(username == ""){
        return res.redirect('/');
    } else
        return res.redirect('/user/'+username);
})


