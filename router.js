const express = require('express')
const rotas = express.Router()

const ler_arquivo = require('./controllers/ler_arquivo')

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

rotas.get('/exibirActivity/:nome_arquivo', (req, res) => {
    var {nome_arquivo} = req.params
    var resultado = ler_arquivo.ler(nome_arquivo)
    res.send(resultado)
})

rotas.post('/exibirActivity', (req, res) => {
    var {nome_arquivo} = req.body
    var resultado = ler_arquivo.ler(nome_arquivo)
    res.send(resultado)
})

rotas.get('/meanActivity/:nome_arquivo', (req, res) => {
    var {nome_arquivo} = req.params
    var resultado = ler_arquivo.media_mediana(nome_arquivo)
    res.send(resultado)
})

rotas.post('/meanActivity', (req, res) => {
    var {nome_arquivo} = req.body
    var resultado = ler_arquivo.media_mediana(nome_arquivo)
    res.send(resultado)
})

rotas.get('/listMeanActivity', async (req, res)  => {
    var resultado = await ler_arquivo.listMeanActivity()
    res.send(resultado)
})

module.exports = rotas