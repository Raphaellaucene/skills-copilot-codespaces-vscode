// Create web server

const express = require('express');
const router = express.Router();
const commentController = require('./commentController'); // Importe o controlador de comentários

const app = express();
const port = 3000;

// Rotas
app.use('/comments', commentController); // Use o controlador de comentários na rota /comments

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
