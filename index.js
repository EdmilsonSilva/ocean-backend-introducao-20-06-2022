const express = require("express");
const app = express();
const port = 3000;
const heroes = ["Mulher Maravilha", "Capitã Marvel", "Vespa", "Ms Marvel", "Valkyrie", "Homem de Ferro"];

app.get("/", (_req, res) => {
    res.status(200).send("Hello World");
})

// # Endpoint Read All - [GET] /heroes 
app.get("/heroes", (_req, res) => {
    res.status(200).json(heroes);
});

// # Endpoint Read One - [GET] /heroes/:id
app.get("/heroes/:id", (req, res) => {
    if(heroes[req.params.id - 1]) {
        return res.status(200).json(heroes[req.params.id - 1]);
    }
    res.sendStatus(404);
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})