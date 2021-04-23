const express = require('express')
const rotas = express.Router()

rotas.get('/', (req, res) => {
    res.send('inicio do projeto')
})

rotas.get('/obterJson/:nome_arquivo', (req, res) => {
    var {nome_arquivo} = req.params
    var arquivo = require(`./arquivos/${nome_arquivo}.json`)
    res.send(arquivo)
})

rotas.post('/obterJson', (req, res) => {
    var {nome_arquivo} = req.body
    var arquivo = require(`./arquivos/${nome_arquivo}.json`)
    res.send(arquivo)
})

module.exports = rotas