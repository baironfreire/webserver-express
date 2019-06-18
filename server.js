const express = require('express'); // Libreria de tercero express
const app = express(); // 
const hbs = require('hbs'); //Libreria de tercero hbs
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public')); /* Definimos el directorio publico */


// Express hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs'); // 

//helper

app.get("/", (req, resp) => {


    resp.render('home', { // se le envia los parametros a la vista
        nombre: 'Bairon Frerie',

    });
});

app.get("/about", (req, resp) => {


    resp.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando  peticiones en el puerto ${port} `);
})