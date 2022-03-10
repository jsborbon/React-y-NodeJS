const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
10

const bodyparser = require('body-parser');
app.use(bodyparser.json()) // for parsing application/json
app.use(bodyparser.urlencoded({ extended: true }))
require('./database');
app.set('Port', 4000);
app.use(morgan('dev')); //me informa el tipo de peticiones

//app.use(bodyparser.urlencoded({extended:true}));
//app.use(bodyparser.json());

//Rutas
app.use('/api/',require('./routes/prueba.route'));

//start server

app.listen(app.get('Port'),()=>{
    console.log('Escuchando por el puerto ', app.get('Port'));
});

