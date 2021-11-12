/* Ejercicio de prueba*/
require('dotenv').config();
const morgan = require('morgan');

const port = process.env.APP_PORT;
const morganFormat = process.env.APP_MORGAN_FORMAT;

const express = require('express')
const app = express()

app.use(morgan('dev'));

app.get('/', function (req, res) {
    const texto = 'Esta es información obtenidad desde tu API!!';
    console.log(texto)
    res.send(texto)
})

app.get('/version', function (req, res) {
    res.send('API v1.0')
})

app.listen(port, () => {
    console.log(`Aplicación escuchando en el puerto ${port}`);
})