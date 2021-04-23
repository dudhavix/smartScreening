const express = require('express')
const rotas = express.Router()

rotas.get('/', (req, res) => {
    res.send('inicio do projeto')
})

module.exports = rotas