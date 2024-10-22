const express = require('express');
const routes = require('./routes/index');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

app.use((req,res,next) => {
    console.log("foi lançando um middleware");
    req.timeStamp = new Date().toString();
    next(); // permite o fluxo de rotas continuar
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs');


app.listen(8080);
console.log("Servidor rodando na porta 8080");

