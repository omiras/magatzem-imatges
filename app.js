const express = require('express');

// Nuestra "Base de datos", sera un array de objetos
// Que aspecto tendrá cada objeto? que propiedades tiene?
// titulo
// url
// fecha
// (versiones futuras) color predominante

const pictures = [{
    titulo: "Me gustaría estar en Dinamarca",
    url: "https://",
    fecha: "2022-06-06"
}];

const app = express();

// Informamos que nuestro servidor va a utilizar el sistema de plantillas EJS
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    // Le pasamos a la vista index.ejs una variable que se llama 'numPics' y cuyo es el número de elementos del array picutres
    res.render("index", {
        numPics: pictures.length
    }); // Buscame la vista 'index.ejs' dentro de la carpeta 'views' y renderiza el contenido como HTML y enviáselo al cliente
});

app.get("/nueva-imagen", (req, res) => {
    res.send("Formulario de añadir imagen.");
});

// La función de callback se ejecutará en el caso que hayamos levantado con éxito el servidor.
app.listen(3000, () => {
    console.log("Servidor funcionando correctamente.");
});