
//http://localhost:3003/produtos
//teste do postman

const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDedados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))


// app.get('/produtos', (req, res, next) => {
//     res.send({ nome: 'notebook', preco: 123.45 })
// })

app.get('/produtos', (req, res, next) => {
    res.send(bancoDedados.getProdutos())
})


app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDedados.getProduto(res.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDedados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //json
})


app.put('/produtos:id', (req, res, next) => {
    const produto = bancoDedados.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //json
})



app.delete('/produtos:id', (req, res, next) => {
    const produto = bancoDedados.excluirProduto(req.params.id)
    res.send(produto) //json
})


app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta} `)
})