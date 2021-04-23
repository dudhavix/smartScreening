const express = require('express');
const rotas = require('./router');
const app = express();
const porta = 5000;

app.use(express.json())
app.use(rotas)

app.listen(porta, () => console.log(`Rodando... na porta => ${porta}`))