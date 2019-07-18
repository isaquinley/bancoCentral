const express = require('express');
const bodyParser = require('body-parser');
// Instanciar express
const app = express();
// Uso de body parser
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());
// funciones que responden a los metodos ET, POST, PUT, DELETE
app.get('/',function(req, res){
    res.send('HELLO WORLD');
});

app.listen(3500, function(){
    console.log('El Servidor esta corriendo por el puerto 3500');
});

